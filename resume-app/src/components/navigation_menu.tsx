import Avatar from './avatar';
import GitImage from './github';
import LinkedInImage from './linkedin';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="w-full">
      <div className="flex items-start justify-between px-4 sm:px-6 md:px-8">
        <div className="flex items-center mt-8">
          <Link to="/career">
            <Avatar />
          </Link>
        </div>
        <div className="transform translate-y-2 flex items-center gap-4 shadow-xl rounded-full px-6 py-2 bg-white dark:bg-neutral-800 mt-16">
          <Link to="/career" className="text-gray-700 dark:text-gray-200 font-medium transition-transform hover:scale-110">Career</Link>
          <Link to="/hobbies" className="text-gray-700 dark:text-gray-200 font-medium transition-transform hover:scale-110">Hobbies</Link>
          <Link to="/projects" className="text-gray-700 dark:text-gray-200 font-medium transition-transform hover:scale-110">Projects</Link>
        </div>
        <div className="flex items-center gap-3 mt-4">

          <GitImage
            imageUrl="/github-mark.png"
            linkUrl="https://github.com/jmenz-93"
            altText="Github"
            toolTip="Click to view my Git"
          />
          <LinkedInImage
            imageUrl="/linkedin.png"
            linkUrl="https://www.linkedin.com/in/jon-menzel/"
            altText="LinkedIn"
            toolTip="Connect with me on LinkedIn"
          />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

