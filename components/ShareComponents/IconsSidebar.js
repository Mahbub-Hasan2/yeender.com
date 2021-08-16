import ContactsIcon from '@material-ui/icons/Contacts';
import FacebookIcon from '@material-ui/icons/Facebook';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import TwitterIcon from '@material-ui/icons/Twitter';
import Link from 'next/link';
import React from 'react';

const IconsSidebar = () => (
    <div className="iconsSidebar_area">
        <Link href="https://www.facebook.com/YeenDer-102368518581871">
            <a target="_blank" rel="noopener">
                <div className="iconsSidebar_icons">
                    <FacebookIcon style={{ fontSize: '40px' }} />
                    <span className="sideIconSpan text-truncate">facebook</span>
                </div>
            </a>
        </Link>

        <Link href="https://www.linkedin.com/in/yeender-solution-9b163820b">
            <a target="_blank" rel="noopener">
                <div className="iconsSidebar_icons">
                    <LinkedInIcon style={{ fontSize: '40px' }} />
                    <span className="sideIconSpan text-truncate">linkedIn</span>
                </div>
            </a>
        </Link>
        <Link href="">
            <a target="_blank" rel="noopener">
                <div className="iconsSidebar_icons">
                    <TwitterIcon style={{ fontSize: '40px' }} />
                    <span className="sideIconSpan text-truncate">twitter</span>
                </div>
            </a>
        </Link>
        <Link href="/contact">
            <a target="_blank" rel="noopener">
                <div className="iconsSidebar_icons">
                    <ContactsIcon style={{ fontSize: '40px' }} />
                    <span className="sideIconSpan text-truncate">Contact us</span>
                </div>
            </a>
        </Link>
    </div>
);

export default IconsSidebar;
