import Image from "next/image";
import RecentComments from "./RecentComments";

export default function Sidebar() {
  return (
    <div className="space-y-4">
      {/* 作者信息 */}
      <figure className="bg-gray-800 rounded-xl p-8 light:bg-slate-100">
        <Image
          className="w-24 h-24 rounded-full mx-auto"
          src="/avatar.jpg"
          alt=""
          width="384"
          height="512"
        />
        <div className="pt-6 text-center space-y-4">
          <blockquote>
            <p className="text-lg font-medium">
              Tailwind CSS is the only framework that I&apos;ve seen scale on
              large teams. It&apos;s easy to customize, adapts to any design,
              and the build size is tiny.
            </p>
          </blockquote>
          <figcaption className="font-medium">
            <div className="text-sky-500 dark:text-sky-400">Huix</div>
          </figcaption>
        </div>
      </figure>

      {/* 最新评论 */}
      <RecentComments />

      {/* 标签 */}
      <div className="bg-gray-800 p-4 rounded-md shadow-md">
        <h3 className="text-lg font-bold text-purple-400">Tags</h3>
        <div className="mt-2 flex space-x-2">
          <span className="px-2 py-1 bg-gray-700 rounded">Tag1</span>
          <span className="px-2 py-1 bg-gray-700 rounded">Tag2</span>
          <span className="px-2 py-1 bg-gray-700 rounded">Tag3</span>
          <span className="px-2 py-1 bg-gray-700 rounded">Tag4</span>
          <span className="px-2 py-1 bg-gray-700 rounded">Tag5</span>
        </div>
      </div>
    </div>
  );
}
