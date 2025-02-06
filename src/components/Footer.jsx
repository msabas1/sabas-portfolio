import { ButtonPrimary } from "./Button";

const sitemap = [
    {
      label: 'Home',
      href: '#home'
    },
    {
      label: 'About',
      href: '#about'
    },
    {
      label: 'Work',
      href: '#work'
    },
    {
      label: 'Projects',
      href: '#projects'
    },
    {
      label: 'Contact Me',
      href: '#contact'
    }
  ];
  
  const socials = [
    {
      label: 'GitHub',
      href: 'https://github.com/msabas1?tab=repositories'
    },
    {
      label: 'LinkedIn',
      href: 'https://www.linkedin.com/in/marvinsabas/'
    }
  ];

const Footer = () => {
  return (
    <footer className="section">
        <div className="container">
            <div className="">
                <div className="">
                    <h2 className="headline-1">
                        Let&apos;s work together!
                    </h2>

                    <ButtonPrimary
                        href="mailto:sabasmarvinn@gmail.com"
                        label="Work with me"
                        icon="chevron_right"
                    />
                </div>

                <div className="">
                    <div>
                        <p className="">Socials</p>

                        <ul>
                            {socials.map(({ label, href }, key) => (
                                <li key={key}>
                                    <a
                                        href={href}
                                        target="_blank"
                                        className=""
                                    >
                                        {label}
                                    /</a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </footer>
  )
}

export default Footer