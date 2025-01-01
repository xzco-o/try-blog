import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTwitter,
  faYoutube,
  faGithub,
  faBilibili,
  faBluesky,
} from "@fortawesome/free-brands-svg-icons";
import { Link } from "lucide-react";

export default function AboutPage() {
  return (
    <div className="bg-gray-900 text-gray-300 min-h-screen flex flex-col items-center justify-center py-12 px-6 animate-fade-in">
      {/* 容器 */}
      <div className="max-w-4xl w-full bg-gray-800 rounded-lg shadow-lg overflow-hidden">
        {/* 上半部分：图片 + 标题 */}
        <div className="flex flex-col md:flex-row">
          {/* 左侧图片 */}
          <div className="md:w-1/2">
            <Image
              src="/avatar.jpg" // 替换为你的图片链接
              alt="Profile"
              width={400}
              height={400}
              className="object-cover w-full h-full"
            />
          </div>
          {/* 右侧内容 */}
          <div className="md:w-1/2 p-8 flex flex-col justify-center">
            <h1 className="text-4xl font-bold text-white mb-2">About Me</h1>
            <h2 className="text-lg font-semibold text-pink-400">
              Huix - gamer
            </h2>
            <p className="text-gray-400 mt-4">
              I am a passionate web developer with a keen interest in crafting
              dynamic and engaging digital experiences. With years of experience
              in frontend and backend technologies, I strive to create
              user-centric designs and efficient solutions.
            </p>
          </div>
        </div>

        {/* 下半部分：社交链接 */}
        <div className="bg-gray-700 text-gray-400 py-6 px-8 flex items-center justify-center space-x-4">
          <Link
            href="https://x.com/home?lang=en"
            className="text-pink-400 hover:text-white transition duration-200"
          >
            <FontAwesomeIcon icon={faTwitter} className="text-xl" />
          </Link>
          <Link
            href="https://bsky.app/"
            className="text-pink-400 hover:text-white transition duration-200"
          >
            <FontAwesomeIcon icon={faBluesky} className="text-xl" />
          </Link>
          <Link
            href="https://www.youtube.com/"
            className="text-pink-400 hover:text-white transition duration-200"
          >
            <FontAwesomeIcon icon={faYoutube} className="text-xl" />
          </Link>
          <Link
            href="https://www.bilibili.com/"
            className="text-pink-400 hover:text-white transition duration-200"
          >
            <FontAwesomeIcon icon={faBilibili} className="text-xl" />
          </Link>
          <Link
            href="https://github.com/"
            className="text-pink-400 hover:text-white transition duration-200"
          >
            <FontAwesomeIcon icon={faGithub} className="text-xl" />
          </Link>
        </div>
      </div>
    </div>
  );
}
