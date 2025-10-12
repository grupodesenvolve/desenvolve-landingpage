// module.exports = {
//   i18n: {
//     locales: ["en"],
//     defaultLocale: "en",
//   },
//   target: "serverless",
//   webpack: (config, { isServer }) => {
//     if (!isServer) {
//       config.resolve.fallback.fs = false;
//     }
//     return config;
//   },
// };

const isProd = process.env.NODE_ENV === 'production';

/** @type {import('next').NextConfig} */
const nextConfig = {
    assetPrefix: isProd ? '/desenvolve/' : '',
    basePath: isProd ? '/desenvolve' : '',
    images: {
        // Para desenvolvimento local, usar configuração padrão
        // Para produção com next export, pode precisar de configuração especial
        ...(isProd && {
            loader: 'akamai',
            path: '',
        })
    },
};

module.exports = nextConfig;