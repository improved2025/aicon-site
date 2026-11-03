/** @type {import('next').NextConfig} */
const nextConfig = {
  async headers() {
    // Preview build: keep search engines out until the clinic approves launch.
    return [{ source: "/:path*", headers: [{ key: "X-Robots-Tag", value: "noindex, nofollow" }] }];
  },
};
export default nextConfig;
