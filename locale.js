// I18n module with placeholder support
class I18n {
    constructor() {
        this.SUPPORTED_LOCALES = ['zh', 'en'];
        this.DEFAULT_LOCALE = 'zh';
        this.translations = new Map();
        this.currentLocale = this.initializeLocale();
        this.init();
    }

    // Initialize locale from localStorage or use default
    initializeLocale() {
        const savedLocale = localStorage.getItem("locale");
        return this.SUPPORTED_LOCALES.includes(savedLocale) ? savedLocale : this.DEFAULT_LOCALE;
    }

    // Initialize the i18n system
    async init() {
        // 先设置默认翻译，再异步加载完整翻译
        this.setupBasicTranslations();
        await this.loadTranslations();
        this.setup();
    }

    setupBasicTranslations() {
        // 设置关键元素的默认翻译
        const stationInput = document.getElementById("stationInput");
        if (stationInput) stationInput.placeholder = "请输入站点名称";
    }
    // Load translation files
    async loadTranslations() {
        for (const locale of this.SUPPORTED_LOCALES) {
            try {
                const response = await fetch(`./i18n/${locale}.json`);
                const translations = await response.json();
                this.translations.set(locale, translations);
            } catch (error) {
                console.error(`Failed to load translations for ${locale}:`, error);
            }
        }
    }

    // Set up locale toggle button
    setup() {
        const localeSelection = document.getElementById("locale-selection");
        if (!localeSelection) return;
        
        if (this.currentLocale === "zh") {
            localeSelection.onclick = () => this.switchLocale("en");
            localeSelection.innerText = this.t("locale.switch_to_english");
        } else if (this.currentLocale === "en") {
            localeSelection.onclick = () => this.switchLocale("zh");
            localeSelection.innerText = this.t("locale.switch_to_chinese");
        }

        const stationInput = document.getElementById("stationInput");
        stationInput.placeholder = this.t("ui.input");

        document.querySelectorAll('[data-i18n]').forEach(element => {
            const key = element.getAttribute('data-i18n');
            element.innerHTML = this.t(key);
        });
    }

    // Switch locale
    switchLocale(newLocale) {
        localStorage.setItem("locale", newLocale);
        location.reload();
    }

    // Get translation with placeholder support
    t(key, ...args) {
        const translations = this.translations.get(this.currentLocale);
        if (!translations) return key;

        // Support nested keys like "ui.终点站"
        const keys = key.split('.');
        let value = translations;
        
        for (const k of keys) {
            if (value && typeof value === 'object' && k in value) {
                value = value[k];
            } else {
                return key; // Return key if not found
            }
        }

        if (typeof value !== 'string') return key;

        // Replace placeholders {0}, {1}, etc.
        return value.replace(/{(\d+)}/g, (match, index) => {
            const argIndex = parseInt(index);
            return argIndex < args.length ? args[argIndex] : match;
        });
    }

    // Get station translation (backward compatibility)
    getStation(stationName) {
        return this.t(`stations.${stationName}`) || `stations.${stationName}`;
    }

    // Get UI translation (backward compatibility)
    getUI(uiKey) {
        return this.t(`ui.${uiKey}`) || `ui.${uiKey}`;
    }

    // Get line format with number
    getLine(lineNumber) {
        return this.t('line.format', lineNumber);
    }

    // Get Chinese equivalent (for file naming)
    getZh(englishName) {
        // Find the Chinese key for the given English value
        const zhTranslations = this.translations.get('zh');
        const enTranslations = this.translations.get('en');
        
        if (!zhTranslations || !enTranslations) return englishName;
        
        // Search in stations
        for (const [zhKey, zhValue] of Object.entries(zhTranslations.stations || {})) {
            if (enTranslations.stations && enTranslations.stations[zhKey] === englishName) {
                return zhKey;
            }
        }
        
        return englishName;
    }

    // Get current locale
    getCurrentLocale() {
        return this.currentLocale;
    }
}

// Create global i18n instance
const i18n = new I18n();

// Backward compatibility functions
function getlocale(key) {
    // Try UI translation first, then station translation
    const uiTranslation = i18n.getUI(key);
    if (uiTranslation != `ui.${key}`) return uiTranslation;
    
    return i18n.getStation(key);
}

function getzh(englishName) {
    return i18n.getZh(englishName);
}

function getlocale_line(lineNumber) {
    return i18n.getLine(lineNumber);
}

// Export for module usage
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { i18n, getlocale, getzh, getlocale_line };
}