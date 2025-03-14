const Header = () => {
  return (
    <div className='nav-bar'>
      <h1 className="logo">Skinny Puppy</h1>
      <nav>
        <ul>
          <li>
            <a href='/index.html'>Home</a>
          </li>
          <li>
            <a href='/about.html'>About</a>
          </li>
          <li>
            <a href='/contact.html'>Contact</a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
