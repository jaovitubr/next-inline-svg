/** @param {import("@svgr/core").Config} options */
module.exports = (options = {}) => {
    /** @param {import("next").NextConfig} nextConfig */
    return (nextConfig = {}) => {
        return {
            ...nextConfig,
            webpack(config) {
                config.module.rules.push({
                    test: /\.svg$/i,
                    issuer: /\.[jt]sx?$/,
                    use: [
                        {
                            loader: require.resolve('@svgr/webpack'),
                            options,
                        },
                    ],
                })

                return config;
            }
        };
    }
}