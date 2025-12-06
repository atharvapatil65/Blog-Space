// Validate required environment variables
const getEnvVar = (key, defaultValue = '') => {
    const value = import.meta.env[key];
    if (!value || value === 'undefined') {
        console.warn(`Warning: Environment variable ${key} is not set. Please check your .env file.`);
        return defaultValue;
    }
    return String(value);
};

const appwriteUrl = getEnvVar('VITE_APPWRITE_URL');
const appwriteProjectId = getEnvVar('VITE_APPWRITE_PROJECT_ID');

if (!appwriteUrl || !appwriteProjectId) {
    console.error('Error: Missing required Appwrite configuration. Please set VITE_APPWRITE_URL and VITE_APPWRITE_PROJECT_ID in your .env file.');
}

const conf = {
    appwriteUrl: appwriteUrl,
    appwriteProjectId: appwriteProjectId,
    appwriteDatabaseId: getEnvVar('VITE_APPWRITE_DATABASE_ID'),
    appwriteCollectionId: getEnvVar('VITE_APPWRITE_COLLECTION_ID'),
    appwriteBucketId: getEnvVar('VITE_APPWRITE_BUCKET_ID'),
}

export default conf