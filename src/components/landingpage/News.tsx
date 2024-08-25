import { Link } from "react-router-dom";

const News = () => {
  return (
    <div className="flex flex-col items-center pt-2">
      <div className="text-2xl font-bold font-sans tracking-wider leading-9 text-center text-white">To Keep You Update 🔥</div>
      <div className="mx-auto w-5/6 mt-6 max-md:max-w-full">
        <div className="flex justify-center gap-5 pb-4 max-md:flex-col max-md:gap-5">
          {/* 1 */}
          <div className="flex flex-col mt-8 w-[408px] h-[488px] max-md:ml-0 max-md:w-full">
            <div className="flex flex-col grow text-white max-md:mt-4">
              <div className="flex flex-col rounded-2xl border border-custom-gold-rod customShadow h-full">
                <img
                  loading="lazy"
                  srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/3d8ef4bb2335a1cd1b5761a52fc38e023cc902c383a43e19c68f9e445f4729bb?apiKey=c5d3c1ebc6e4432baa8d6b4acb8ace29&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/3d8ef4bb2335a1cd1b5761a52fc38e023cc902c383a43e19c68f9e445f4729bb?apiKey=c5d3c1ebc6e4432baa8d6b4acb8ace29&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/3d8ef4bb2335a1cd1b5761a52fc38e023cc902c383a43e19c68f9e445f4729bb?apiKey=c5d3c1ebc6e4432baa8d6b4acb8ace29&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/3d8ef4bb2335a1cd1b5761a52fc38e023cc902c383a43e19c68f9e445f4729bb?apiKey=c5d3c1ebc6e4432baa8d6b4acb8ace29&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/3d8ef4bb2335a1cd1b5761a52fc38e023cc902c383a43e19c68f9e445f4729bb?apiKey=c5d3c1ebc6e4432baa8d6b4acb8ace29&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/3d8ef4bb2335a1cd1b5761a52fc38e023cc902c383a43e19c68f9e445f4729bb?apiKey=c5d3c1ebc6e4432baa8d6b4acb8ace29&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/3d8ef4bb2335a1cd1b5761a52fc38e023cc902c383a43e19c68f9e445f4729bb?apiKey=c5d3c1ebc6e4432baa8d6b4acb8ace29&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/3d8ef4bb2335a1cd1b5761a52fc38e023cc902c383a43e19c68f9e445f4729bb?apiKey=c5d3c1ebc6e4432baa8d6b4acb8ace29&"
                  className="w-full rounded-t-2xl mix-blend-luminosity aspect-[2.04]"
                />
                <div className="flex flex-col rounded-b-xl p-4 w-full  h-full">
                  <Link to="https://www.dailyfx.com/news/bitcoin-btc-testing-technical-resistance-gold-xau-nudging-higher-20240809.html" target="_blank" className="text-base font-bold font-sans leading-6">
                    Bitcoin (BTC) Testing Technical Resistance, Gold (XAU) Nudging Higher
                  </Link>
                  <div className="mt-4 text-sm font-sans font-normal tracking-wide leading-6 text-justify line-clamp-6">
                    The current movements of Bitcoin and gold as of August 9, 2024. Bitcoin is testing significant technical resistance after experiencing a period of volatility. The price is attempting to rise, but this resistance level
                    could pose a major hurdle for further gains. Observing how Bitcoin reacts to this resistance will be crucial, as breaking through or failing to surpass this level could influence future price trends. On the other hand,
                    gold (XAU) is showing an upward trend. Gold, often considered a safe-haven asset, typically remains stable during market uncertainties. However, its recent movement indicates a positive trend, possibly driven by global
                    economic uncertainties or shifts in monetary policy. The article suggests paying attention to macroeconomic factors that could impact gold prices and how market dynamics may evolve over time.
                  </div>
                  <div className="shrink-0 mt-4 h-px border-dashed border-t border-custom-gold-rod border-opacity-10" />
                  <div className="flex gap-4 mt-4 text-sm font-sans font-normal tracking-wide leading-[157%]">
                    <div className="flex gap-2">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                          d="M19 19H5V8H19M16 1V3H8V1H6V3H5C3.89 3 3 3.89 3 5V19C3 19.5304 3.21071 20.0391 3.58579 20.4142C3.96086 20.7893 4.46957 21 5 21H19C19.5304 21 20.0391 20.7893 20.4142 20.4142C20.7893 20.0391 21 19.5304 21 19V5C21 4.46957 20.7893 3.96086 20.4142 3.58579C20.0391 3.21071 19.5304 3 19 3H18V1M17 12H12V17H17V12Z"
                          fill="#021825"
                        />
                      </svg>
                      <div>Aug 09, 2024</div>
                    </div>
                    <div>•</div>
                    <div>8:00 PM</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* 2 */}
          <div className="flex flex-col mt-8 w-[408px] h-[488px] max-md:gap-5 max-md:w-full">
            <div className="flex flex-col grow text-white max-md:mt-4">
              <div className="flex flex-col rounded-2xl border border-custom-gold-rod customShadow h-full">
                <img
                  loading="lazy"
                  srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/94297152cf4820d1f969b0e09b1186b86f332056758bddcb434e984cc7a5d6e7?apiKey=c5d3c1ebc6e4432baa8d6b4acb8ace29&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/94297152cf4820d1f969b0e09b1186b86f332056758bddcb434e984cc7a5d6e7?apiKey=c5d3c1ebc6e4432baa8d6b4acb8ace29&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/94297152cf4820d1f969b0e09b1186b86f332056758bddcb434e984cc7a5d6e7?apiKey=c5d3c1ebc6e4432baa8d6b4acb8ace29&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/94297152cf4820d1f969b0e09b1186b86f332056758bddcb434e984cc7a5d6e7?apiKey=c5d3c1ebc6e4432baa8d6b4acb8ace29&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/94297152cf4820d1f969b0e09b1186b86f332056758bddcb434e984cc7a5d6e7?apiKey=c5d3c1ebc6e4432baa8d6b4acb8ace29&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/94297152cf4820d1f969b0e09b1186b86f332056758bddcb434e984cc7a5d6e7?apiKey=c5d3c1ebc6e4432baa8d6b4acb8ace29&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/94297152cf4820d1f969b0e09b1186b86f332056758bddcb434e984cc7a5d6e7?apiKey=c5d3c1ebc6e4432baa8d6b4acb8ace29&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/94297152cf4820d1f969b0e09b1186b86f332056758bddcb434e984cc7a5d6e7?apiKey=c5d3c1ebc6e4432baa8d6b4acb8ace29&"
                  className="w-full rounded-t-2xl mix-blend-luminosity aspect-[4]"
                />
                <div className="flex flex-col p-4 w-full rounded-b-xl ">
                  <Link to="https://finance.yahoo.com/news/ultimate-cryptocurrency-buy-1-000-110800979.html " target="_blank" className="text-base font-bold font-sans leading-6">
                    The Ultimate Cryptocurrency to Buy With $1,000
                  </Link>

                  <div className="shrink-0 mt-4 h-px border-dashed border-t border-custom-gold-rod border-opacity-10" />
                  <div className="flex gap-4 mt-4 text-sm font-sans font-normal tracking-wide leading-5">
                    <div className="flex gap-2">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                          d="M19 19H5V8H19M16 1V3H8V1H6V3H5C3.89 3 3 3.89 3 5V19C3 19.5304 3.21071 20.0391 3.58579 20.4142C3.96086 20.7893 4.46957 21 5 21H19C19.5304 21 20.0391 20.7893 20.4142 20.4142C20.7893 20.0391 21 19.5304 21 19V5C21 4.46957 20.7893 3.96086 20.4142 3.58579C20.0391 3.21071 19.5304 3 19 3H18V1M17 12H12V17H17V12Z"
                          fill="#021825"
                        />
                      </svg>
                      <div>Aug 11, 2024</div>
                    </div>
                    <div>•</div>
                    <div>6:08 PM</div>
                  </div>
                </div>
              </div>
              {/* 3 */}
              <div className="flex flex-col mt-4 rounded-2xl border border-custom-gold-rod customShadow h-full">
                <img
                  loading="lazy"
                  srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/860e451e94df69e4a5bd6facf169fd9b5ee2c5e46dc76fd99e6b102cbd987949?apiKey=c5d3c1ebc6e4432baa8d6b4acb8ace29&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/860e451e94df69e4a5bd6facf169fd9b5ee2c5e46dc76fd99e6b102cbd987949?apiKey=c5d3c1ebc6e4432baa8d6b4acb8ace29&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/860e451e94df69e4a5bd6facf169fd9b5ee2c5e46dc76fd99e6b102cbd987949?apiKey=c5d3c1ebc6e4432baa8d6b4acb8ace29&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/860e451e94df69e4a5bd6facf169fd9b5ee2c5e46dc76fd99e6b102cbd987949?apiKey=c5d3c1ebc6e4432baa8d6b4acb8ace29&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/860e451e94df69e4a5bd6facf169fd9b5ee2c5e46dc76fd99e6b102cbd987949?apiKey=c5d3c1ebc6e4432baa8d6b4acb8ace29&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/860e451e94df69e4a5bd6facf169fd9b5ee2c5e46dc76fd99e6b102cbd987949?apiKey=c5d3c1ebc6e4432baa8d6b4acb8ace29&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/860e451e94df69e4a5bd6facf169fd9b5ee2c5e46dc76fd99e6b102cbd987949?apiKey=c5d3c1ebc6e4432baa8d6b4acb8ace29&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/860e451e94df69e4a5bd6facf169fd9b5ee2c5e46dc76fd99e6b102cbd987949?apiKey=c5d3c1ebc6e4432baa8d6b4acb8ace29&"
                  className="w-full rounded-t-2xl mix-blend-luminosity aspect-[4]"
                />
                <div className="flex flex-col p-4 w-full rounded-b-2xl ">
                  <Link to="https://cointelegraph.com/news/data-points-to-ethereum-price-making-a-short-term-rally-to-the-3200-level" target="_blank" className="text-base font-bold font-sans leading-6">
                    Data points to Ethereum price making a short-term rally to the $3.2K level
                  </Link>

                  <div className="shrink-0 mt-4 h-px border-dashed border-t border-custom-gold-rod border-opacity-10" />
                  <div className="flex gap-4 mt-4 text-sm font-sans font-normal tracking-wide leading-5">
                    <div className="flex gap-2">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                          d="M19 19H5V8H19M16 1V3H8V1H6V3H5C3.89 3 3 3.89 3 5V19C3 19.5304 3.21071 20.0391 3.58579 20.4142C3.96086 20.7893 4.46957 21 5 21H19C19.5304 21 20.0391 20.7893 20.4142 20.4142C20.7893 20.0391 21 19.5304 21 19V5C21 4.46957 20.7893 3.96086 20.4142 3.58579C20.0391 3.21071 19.5304 3 19 3H18V1M17 12H12V17H17V12Z"
                          fill="#021825"
                        />
                      </svg>
                      <div>Aug 06, 2024</div>
                    </div>
                    <div>•</div>
                    <div>7:11 PM</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* 4 */}
          <div className="flex flex-col mt-8 w-[408px] h-[488px] max-md:ml-0 max-md:w-full">
            <div className="flex flex-col grow text-white max-md:mt-4">
              <div className="flex flex-col rounded-2xl border border-custom-gold-rod customShadow h-full">
                <img
                  loading="lazy"
                  srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/1f28434ab86c0fa53aae9c14b4f7144828a5551e7b15fade2ca1845d79de4da7?apiKey=c5d3c1ebc6e4432baa8d6b4acb8ace29&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/1f28434ab86c0fa53aae9c14b4f7144828a5551e7b15fade2ca1845d79de4da7?apiKey=c5d3c1ebc6e4432baa8d6b4acb8ace29&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/1f28434ab86c0fa53aae9c14b4f7144828a5551e7b15fade2ca1845d79de4da7?apiKey=c5d3c1ebc6e4432baa8d6b4acb8ace29&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/1f28434ab86c0fa53aae9c14b4f7144828a5551e7b15fade2ca1845d79de4da7?apiKey=c5d3c1ebc6e4432baa8d6b4acb8ace29&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/1f28434ab86c0fa53aae9c14b4f7144828a5551e7b15fade2ca1845d79de4da7?apiKey=c5d3c1ebc6e4432baa8d6b4acb8ace29&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/1f28434ab86c0fa53aae9c14b4f7144828a5551e7b15fade2ca1845d79de4da7?apiKey=c5d3c1ebc6e4432baa8d6b4acb8ace29&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/1f28434ab86c0fa53aae9c14b4f7144828a5551e7b15fade2ca1845d79de4da7?apiKey=c5d3c1ebc6e4432baa8d6b4acb8ace29&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/1f28434ab86c0fa53aae9c14b4f7144828a5551e7b15fade2ca1845d79de4da7?apiKey=c5d3c1ebc6e4432baa8d6b4acb8ace29&"
                  className="w-full rounded-t-2xl mix-blend-luminosity aspect-[4]"
                />
                <div className="flex flex-col p-4 w-full rounded-b-xl ">
                  <Link to="https://cryptonews.net/news/analytics/29548849/" target="_blank" className="text-base font-bold font-sans leading-6">
                    The Biggest Crypto Predictions for August 2024
                  </Link>

                  <div className="shrink-0 mt-4 h-px border-dashed border-t border-custom-gold-rod border-opacity-10" />
                  <div className="flex gap-4 mt-4 text-sm font-sans font-normal tracking-wide leading-5">
                    <div className="flex gap-2">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                          d="M19 19H5V8H19M16 1V3H8V1H6V3H5C3.89 3 3 3.89 3 5V19C3 19.5304 3.21071 20.0391 3.58579 20.4142C3.96086 20.7893 4.46957 21 5 21H19C19.5304 21 20.0391 20.7893 20.4142 20.4142C20.7893 20.0391 21 19.5304 21 19V5C21 4.46957 20.7893 3.96086 20.4142 3.58579C20.0391 3.21071 19.5304 3 19 3H18V1M17 12H12V17H17V12Z"
                          fill="#021825"
                        />
                      </svg>
                      <div>Aug 03, 2024</div>
                    </div>
                    <div>•</div>
                    <div>06:10 PM</div>
                  </div>
                </div>
              </div>
              {/* 5 */}
              <div className="flex flex-col mt-4 rounded-2xl border border-custom-gold-rod customShadow">
                <img
                  loading="lazy"
                  srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/cd9f534b6fbd83ceaab121f9ee6122cca404f85819039e1ddaab61abc6e2c551?apiKey=c5d3c1ebc6e4432baa8d6b4acb8ace29&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/cd9f534b6fbd83ceaab121f9ee6122cca404f85819039e1ddaab61abc6e2c551?apiKey=c5d3c1ebc6e4432baa8d6b4acb8ace29&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/cd9f534b6fbd83ceaab121f9ee6122cca404f85819039e1ddaab61abc6e2c551?apiKey=c5d3c1ebc6e4432baa8d6b4acb8ace29&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/cd9f534b6fbd83ceaab121f9ee6122cca404f85819039e1ddaab61abc6e2c551?apiKey=c5d3c1ebc6e4432baa8d6b4acb8ace29&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/cd9f534b6fbd83ceaab121f9ee6122cca404f85819039e1ddaab61abc6e2c551?apiKey=c5d3c1ebc6e4432baa8d6b4acb8ace29&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/cd9f534b6fbd83ceaab121f9ee6122cca404f85819039e1ddaab61abc6e2c551?apiKey=c5d3c1ebc6e4432baa8d6b4acb8ace29&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/cd9f534b6fbd83ceaab121f9ee6122cca404f85819039e1ddaab61abc6e2c551?apiKey=c5d3c1ebc6e4432baa8d6b4acb8ace29&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/cd9f534b6fbd83ceaab121f9ee6122cca404f85819039e1ddaab61abc6e2c551?apiKey=c5d3c1ebc6e4432baa8d6b4acb8ace29&"
                  className="w-full rounded-t-2xl mix-blend-luminosity aspect-[4]"
                />
                <div className="flex flex-col p-4 w-full rounded-b-xl ">
                  <Link to="https://www.dailyfx.com/news/gold-xau-usd-ready-to-print-a-new-all-time-high-latest-sentiment-analysis-20240716.html" target="_blank" className="text-base font-bold font-sans leading-6">
                    Gold (XAU/USD) - Ready to Print a New All-Time High, Latest Sentiment Analysis
                  </Link>

                  <div className="shrink-0 mt-4 h-px border-dashed border-t border-custom-gold-rod border-opacity-10" />
                  <div className="flex gap-4 mt-4 text-sm font-sans font-normal tracking-wide leading-5">
                    <div className="flex gap-2">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                          d="M19 19H5V8H19M16 1V3H8V1H6V3H5C3.89 3 3 3.89 3 5V19C3 19.5304 3.21071 20.0391 3.58579 20.4142C3.96086 20.7893 4.46957 21 5 21H19C19.5304 21 20.0391 20.7893 20.4142 20.4142C20.7893 20.0391 21 19.5304 21 19V5C21 4.46957 20.7893 3.96086 20.4142 3.58579C20.0391 3.21071 19.5304 3 19 3H18V1M17 12H12V17H17V12Z"
                          fill="#021825"
                        />
                      </svg>
                      <div>Jul 16, 2024</div>
                    </div>
                    <div>•</div>
                    <div>8:00 PM</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default News;
