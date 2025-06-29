'use client';

import Link from 'next/link';
import css from './TagsMenu.module.css';
import { Tag } from '@/types/note';
import { useState } from 'react';

const tags: Tag[] = ['Todo', 'Work', 'Personal', 'Meeting', 'Shopping'];

const TagsMenu = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(prevState => !prevState);
  };

  return (
    <div>
      <div className={css.menuContainer}>
        <button className={css.menuButton} onClick={toggleMenu}>
          Notes ▾
        </button>
        {isMenuOpen && (
          <ul className={css.menuList}>
            {/* <li className={css.menuItem}>
              <Link href={`/notes/filter/all`} className={css.menuLink}>
                All notes
              </Link>
            </li> */}
            {tags.map(tag => (
              <li key={tag} className={css.menuItem}>
                <Link href={`/notes/filter/${tag}`} className={css.menuLink}>
                  {tag}
                </Link>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default TagsMenu;
