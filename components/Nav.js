import React from 'react';
import Link from 'next/link';
import Query from './query';
import CATEGORIES_QUERY from '../apollo/queries/category/categories';

const Nav = () => {
  return (
    <div>
      <Query query={CATEGORIES_QUERY} id={null}>
        {({ data: { categories } }) => {
          return (
            <div>
              <nav className="uk-navbar-container" data-uk-navbar>
                <div className="uk-navbar-left">
                  <ul className="uk-navbar-nav">
                    <li>
                      <Link href="/">
                        <a>Connectify Blog</a>
                      </Link>
                    </li>
                  </ul>
                </div>

                <div className="uk-navbar-right">
                  <ul className="uk-navbar-nav">
                    {categories.map((category, i) => {
                      return (
                        <li key={category.id}>
                          <Link
                            href={{
                              pathname: 'category',
                              query: { id: category.id }
                            }}
                          >
                            <a className="uk-link-reset">{category.name}</a>
                          </Link>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </nav>
            </div>
          );
        }}
      </Query>
    </div>
  );
};

export default Nav;
