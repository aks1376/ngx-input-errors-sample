export const errorMessages = {
    fa: {
        defaultMessage: (displayName) => `مقدار ${displayName} صحیح نمی باشد`,
        required: (displayName: string) => `باید مقدار ${displayName} پر شود`,
        maxlength: (displayName: string, errors) => `بیشترین مقدار برای ${displayName} میتواند ${errors.maxlength.requiredLength} باشد`,
        minlength: (displayName: string, errors) => `کمترین مقدار برای ${displayName} می تواند ${errors.minlength.requiredLength} باشد`,
        max: (displayName: string, errors) => `بیشترین اندازه برای ${displayName} میتواند ${errors.max.max} باشد`,
        min: (displayName: string, errors) => `کمترین اندازه برای ${displayName} می تواند ${errors.min.min} باشد`,
        email: (displayName) => `ساختار ${displayName} شما معتبر نمی باشد`
    },
    en: {
        defaultMessage: (displayName) => `${displayName} is not valid`,
        required: (displayName: string) => `${displayName} is required`,
        maxlength: (displayName: string, errors) => `${displayName} max length is: ${errors.maxlength.requiredLength}`,
        minlength: (displayName: string, errors) => `${displayName} min length is: ${errors.minlength.requiredLength}`,
        max: (displayName: string, errors) => `${displayName} max value is: ${errors.max.max}`,
        min: (displayName: string, errors) => `${displayName} min value is: ${errors.min.min}`,
        email: (displayName) => `${displayName} is not valid`
    }
};