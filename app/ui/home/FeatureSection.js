import Image from "next/image";
import "../../styles/global.css";

export default function FeatureSection() {
  return (
    <div className="feature-article">
      {/* 缩略图部分 */}
      <div className="feature-thumbnail">
        <Image
          className="ob-hz-thumbnail w-full h-full object-cover"
          src="/default-cover.jpg"
          alt="Thumbnail"
          width={500}
          height={500}
        />
        <span className="feature-thumbnail-overlay"></span>
      </div>

      {/* 渐变衔接层 */}
      <div
        className="feature-gradient"
        style={{ left: "calc(33% - 0.5rem)" }}
      ></div>

      {/* 内容部分 */}
      <div className="feature-content">
        {/* 标签部分 */}
        <span className="flex items-center text-sm space-x-2">
          <b className="article-tag">Hot</b>
          <b className="text-purple-400">Article</b>
        </span>

        {/* 分类部分 */}
        <span className="flex flex-wrap items-center mt-2 text-gray-400 text-sm">
          <ul className="flex space-x-1">
            <li>
              <em># </em>
              <span>unsorted</span>
            </li>
          </ul>
        </span>

        {/* 标题 */}
        <a
          href="/post/Stop-selling-out-science-to-commerce"
          className="block mt-4"
        >
          <h1 className="article-title" data-dia="article-link">
            Stop selling out science to commerce
          </h1>
        </a>

        {/* 描述 */}
        <p className="article-description">
          Stop selling out science to commerceIntroductionDO COMMERCIAL
          pressures have a n...
        </p>

        {/* 底部信息 */}
        <div className="article-footer">
          <Image
            className="avatar-hover"
            src="/avatar.jpg"
            alt="avatar-Huix"
            width="25"
            height="25"
          />
          <span className="text-gray-400">
            <strong className="text-gray-200 pr-1.5 hover:text-cyan-400 hover:opacity-50 cursor-pointer">
              Huix
            </strong>
            shared on Dec 10, 2024
          </span>
        </div>
      </div>
    </div>
  );
}
