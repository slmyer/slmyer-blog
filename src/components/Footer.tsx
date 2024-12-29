const Footer = () => {
  return (
    <footer className="text-muted-foreground bottom-0 overflow-hidden py-8 text-center text-sm">
      Copyright © {new Date().getFullYear()} Slmyer
      <a
        href="https://beian.miit.gov.cn/"
        target="_blank"
        rel="noopener noreferrer"
        className="ml-1"
      >
        沪ICP备2024106975号-1
      </a>
    </footer>
  )
}

export default Footer
