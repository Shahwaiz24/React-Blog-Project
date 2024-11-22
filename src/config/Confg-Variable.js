const config = {
    BACKEND_URL: String(import.meta.env.VITE_BACKEND_URL),
    BACKEND_DATABASE_ID: String(import.meta.env.VITE_DATABASE_ID),
    BACKEND_PROJECT_ID: String(import.meta.env.VITE_PROJECT_ID),
    BACKEND_BUCKET_ID: String(import.meta.env.VITE_BUCKET_ID),
    BACKEND_PRODUCT_COLLECTION_ID: String(import.meta.env.VITE_PRODUCT_COLLECTION_ID),
    BACKEND_USER_COLLECTION_ID: String(import.meta.env.VITE_USER_COLLECTION_ID),
}
export default config;