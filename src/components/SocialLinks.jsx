import linkedinSvg from '../assets/linkedin.svg';
import githubSvg from '../assets/github.svg';

const SocialLinks = () => {
  return (
    <div className="social-links">
      <a
        href="https://linkedin.com/in/john-wilson-2ab3b358"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src={linkedinSvg} alt="LinkedIn" />
      </a>
      <a
        href="https://github.com/Paintballskaguy/atlas-react-and-jsx.git"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src={githubSvg} alt="GitHub" />
      </a>
    </div>
  );
};

export default SocialLinks;