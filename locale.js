// Locale management module
const localeSelection = document.getElementById("locale-selection");
const SUPPORTED_LOCALES = ['zh', 'en'];
const DEFAULT_LOCALE = 'zh';

// Initialize locale from localStorage or use default
const locale = (() => {
    const savedLocale = localStorage.getItem("locale");
    return SUPPORTED_LOCALES.includes(savedLocale) ? savedLocale : DEFAULT_LOCALE;
})();

// Set up locale toggle button
function setupLocaleSelector() {
    if (locale === "zh") {
        localeSelection.onclick = () => {
            localStorage.setItem("locale", "en");
            location.reload();
        };
        localeSelection.innerText = "英文/English";
    } else if (locale === "en") {
        localeSelection.onclick = () => {
            localStorage.setItem("locale", "zh");
            location.reload();
        };
        localeSelection.innerText = "中文/Chinese";
    }
}

// Initialize translation maps
const transMap = new Map();
const tozhMap = new Map();

// Populate translation maps
function initializeTranslations() {
    if (!Array.isArray(translation)) {
        console.error("Translation data is not available or not an array");
        return;
    }
    
    for (const item of translation) {
        if (item && item.zh) {
            transMap.set(item.zh, item);
            if (item.en) {
                tozhMap.set(item.en, item.zh);
            }
        }
    }
}

/**
 * Get localized string from Chinese key
 * @param {string} s - Chinese string key
 * @returns {string} - Localized string
 */
function getlocale(s) {
    const entry = transMap.get(s);
    if (!entry) return s;
    return entry[locale] || s;
}

/**
 * Get Chinese equivalent of English string
 * @param {string} s - English string
 * @returns {string} - Chinese equivalent or original string
 */
function getzh(s) {
    return tozhMap.get(s) || s;
}

/**
 * Format line number according to current locale
 * @param {string|number} id - Line identifier
 * @returns {string} - Formatted line string
 */
function getlocale_line(id) {
    switch (locale) {
        case "zh":
            return `${id}号线`;
        case "en":
            return `Line ${id}`;
        default:
            return `LOCALE_MISSING,${id}`;
    }
}

// Initialize the module
setupLocaleSelector();
initializeTranslations();

// Export functions if using as a module
// Uncomment if needed:
// export { getlocale, getzh, getlocale_line };