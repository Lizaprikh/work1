export function Footer() {
  return (
      <footer className="app-footer deep-purple accent-2">
          <div className="footer-container">
              <div className="footer-content">
                  <div className="developer-section">
                      <span className="developer-info">
                          <span className="code-icon ">🫐</span>
                          Разработчик: {" "}
                          <a href="https://github.com/kissonne" 
                             target="_blank" 
                             rel="noopener noreferrer"
                             className="developer-link ">
                              Приходько Елизавета 
                          </a>
                      </span>
                  </div>
                  
                  <div className="copyright-section">
                      <span className="copyright">
                          © {new Date().getFullYear()} React Movies
                      </span>
                      
                  </div>
              </div>
          </div>
      </footer>
  )
}
