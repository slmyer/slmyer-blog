import Image from 'next/image'

const Footer = () => {
  return (
    <footer className="w-full py-4 md:py-8">
      <div className="container mx-auto">
        <div className="flex flex-col-reverse items-center justify-between gap-4 md:flex-row">
          <div className="flex items-center">
            <span className="text-sm text-sub-text">
              Copyright © 2024 - {new Date().getFullYear()} Slmyer
            </span>
          </div>
          <div className="flex flex-col items-center gap-4 text-sm text-sub-text md:flex-row">
            <a
              href="https://beian.miit.gov.cn/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primary"
            >
              沪ICP备2024106975号-1
            </a>

            <a
              href="https://beian.mps.gov.cn/#/query/webSearch?code=31011702890386"
              rel="noopener noreferrer"
              target="_blank"
              className="flex items-center gap-2 transition-colors hover:text-primary"
            >
              <Image src="/images/police.png" alt="police" width={16} height={16}></Image>
              沪公网安备31011702890386号
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
