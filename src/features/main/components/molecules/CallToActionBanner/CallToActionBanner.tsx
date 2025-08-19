import "../../../../../shared/styles/global.css";

const CallToActionBanner = () => {
  return (
    <section className="bg-black text-white">
      <div className="container mx-auto px-12 py-16 md:py-24 lg:py-28">
        <div className="max-w-2xl">
          <h1
            className="
							font-black
							text-3xl
							leading-[100%] tracking-[0%]
						
						"
          >
            B2B 전문 의류 쇼핑몰!
            <br />
            <span className="block mt-3 text-3xl font-black">
              15년 이상의 노하우로 믿고 거래 하세요
            </span>
          </h1>
          <p className="mt-6 text-[14px]s [leading-trim:none] leading-[100%] tracking-[0%] text-gray-300">
            수많은 기업이 선택한 신뢰받는 쇼핑 소식, 지금 만나보세요
          </p>
        </div>
      </div>
    </section>
  );
};

export default CallToActionBanner;
