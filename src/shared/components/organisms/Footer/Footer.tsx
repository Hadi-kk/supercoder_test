import Icon from "@/shared/components/atoms/Icon";
import { iconSrcMapping } from "@/shared/constants/iconSrcMapping";

const Footer = () => {
  return (
    <footer className="text-gray-300" style={{ background: "#1A1A1A" }}>
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 gap-10 text-sm md:gap-x-28 md:[grid-template-columns:2.2fr_1fr_1fr]">
          {/* Left column: brand + company info */}
          <div className="space-y-4 pr-6">
            <h2 className="text-4xl font-extrabold text-yellow-400">LANDAS</h2>
            <div className="text-gray-400 leading-relaxed">
              <p>대표이사 : 장창진</p>
              <p>사업자등록번호 : 201-86-15245</p>
              <p>서울특별시 중구 다산로 139 (랜더스빌딩) 6층</p>
              <p>통신판매업신고 : 중구 제0575호</p>
              <p>개인정보보호책임자 : 최주연</p>
            </div>
          </div>

          {/* Center column: contact & bank info */}
          <div className="flex flex-col justify-center items-start  px-4">
            <div className="text-gray-400 mb-2">대표 번호 및 AS 문의</div>
            <div className="text-lg md:text-xl font-bold text-white tracking-wider">
              1661-6244
            </div>
            <div className="mt-2 text-gray-400 text-sm">
              <p>평일 : 09:00 ~ 18:00</p>
              <p>기관 : 기업은행</p>
              <p>계좌번호 : 213-111127-04-035</p>
              <p>예금주 : (주)랜더스</p>
            </div>
          </div>

          {/* Right column: links + social icons */}
          <div className="flex justify-end">
            <div className="flex space-x-12 items-start">
              {/* Left sub-column: privacy + icons */}
              <div className="flex flex-col items-end space-y-3">
                <a href="#" className="text-gray-400 text-sm hover:text-white">
                  개인정보처리방침
                </a>

                <div className="flex items-center space-x-4">
                  <a
                    href="#"
                    aria-label="Instagram"
                    className="hover:opacity-80"
                  >
                    <Icon
                      src={iconSrcMapping.instagram}
                      alt="Instagram"
                      className="h-6 w-6"
                    />
                  </a>
                  <a
                    href="#"
                    aria-label="Facebook"
                    className="hover:opacity-80"
                  >
                    <Icon
                      src={iconSrcMapping.facebook}
                      alt="Facebook"
                      className="h-6 w-6"
                    />
                  </a>
                  <a href="#" aria-label="YouTube" className="hover:opacity-80">
                    <Icon
                      src={iconSrcMapping.youtube}
                      alt="YouTube"
                      className="h-6 w-6"
                    />
                  </a>
                </div>
              </div>

              {/* Right sub-column: terms */}
              <div className="flex flex-col items-end">
                <a href="#" className="text-gray-400 text-sm hover:text-white">
                  이용약관
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-2 text-sm text-gray-500">
          <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-2">
            <p>Copyright © WWW.ldsb2bmall.com All right reserved</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
