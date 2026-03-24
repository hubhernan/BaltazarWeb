import { useEffect, useState } from 'react';
import { Menu, X, ChevronRight, Award, MapPin, Heart, Mail, Phone, Users, Shield, BookOpen, Camera, Calendar } from 'lucide-react';
import './App.css';

function App() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      
      const reveals = document.querySelectorAll('.reveal');
      for (let i = 0; i < reveals.length; i++) {
        const windowHeight = window.innerHeight;
        const elementTop = reveals[i].getBoundingClientRect().top;
        const elementVisible = 150;
        
        if (elementTop < windowHeight - elementVisible) {
          reveals[i].classList.add('active');
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Trigger instantly
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <div className="app">
      {/* Navigation */}
      <header className={isScrolled ? 'scrolled' : ''}>
        <div className="container flex justify-between items-center">
          <a href="#" className="flex items-center gap-sm">
            <span className="text-orange" style={{ fontWeight: 800, fontSize: '1.5rem', letterSpacing: '-0.05em' }}>VIM</span>
            <span style={{ fontWeight: 300, fontSize: '1.2rem' }}>Coyotes Neza</span>
          </a>
          
          <nav className={`nav-links ${isMenuOpen ? 'open' : ''}`}>
            <a href="#inicio" className="nav-link" onClick={toggleMenu}>Inicio</a>
            <a href="#sobre-mi" className="nav-link" onClick={toggleMenu}>Sobre Mí</a>
            <a href="#logros" className="nav-link" onClick={toggleMenu}>Logros</a>
            <a href="#sede" className="nav-link" onClick={toggleMenu}>La Sede</a>
            <a href="#calendario" className="nav-link" onClick={toggleMenu}>Calendario</a>
            <a href="#voluntariado" className="nav-link" onClick={toggleMenu}>Voluntariado</a>
            <a href="#galeria" className="nav-link" onClick={toggleMenu}>Galería</a>
            <a href="#contacto" className="nav-link" onClick={toggleMenu}>Contacto</a>
          </nav>

          <button className="mobile-menu-btn" onClick={toggleMenu}>
            {isMenuOpen ? <X size={32} /> : <Menu size={32} />}
          </button>
        </div>
      </header>

      {/* Hero Section */}
      <section id="inicio" className="hero-section">
        <img src={`${import.meta.env.BASE_URL}hero_bg.png`} alt="Paralympic racing hero background" className="hero-bg" />
        <div className="hero-overlay"></div>
        <div className="container">
          <div className="hero-content reveal">
            <h1 className="hero-title">
              Convertí mi discapacidad en una <span className="text-orange">habilidad</span>
            </h1>
            <p className="hero-subtitle">
              Es difícil, pero no imposible. <br/>
              <strong>Baltazar Hernández Suástegui</strong> — Coordinador VIM Coyotes Neza, Instructor y Atleta Paralímpico.
            </p>
            <div className="hero-cta">
              <a href="#sobre-mi" className="btn btn-primary">
                Conoce mi historia <ChevronRight size={20} />
              </a>
              <a href="#sede" className="btn btn-outline">
                Nuestra Sede Neza
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Sobre Mí Section */}
      <section id="sobre-mi" className="section container">
        <div className="reveal">
          <span className="section-subtitle">01. Mi Historia</span>
          <h2 className="section-title">Sobre Mí</h2>
        </div>
        
        <div className="about-grid reveal">
          <div className="about-text">
            <p>
              Soy <strong>Baltazar Hernández Suástegui</strong>, de 53 años. La poliomielitis dejó secuelas en mi vida, pero no definió mi destino. Mi verdadera transformación comenzó cuando llegué a Vida Independiente México (VIM).
            </p>
            <div className="quote-box">
              "Yo solo buscaba una silla ortopédica, pero encontré una herramienta de vida."
            </div>
            <p>
              Esta herramienta me permitió blindarme contra las caídas, salir de la depresión que me tenía postrado y recuperar mi libertad. Comprendí que la silla de ruedas no es una condena, es el vehículo para alcanzar la independencia absoluta.
            </p>
            <p>
              Hoy en día, mi misión es clara: <strong>"El ayudar a otros me ayuda a mí"</strong>. Transmito este mensaje de resiliencia y técnica a quienes aún siguen encerrados en cuatro paredes, demostrando que existe una vida plena allá afuera.
            </p>
          </div>
          <div className="about-image">
            <img src={`${import.meta.env.BASE_URL}portrait.png`} alt="Baltazar Hernandez Suastegui" />
          </div>
        </div>
      </section>

      {/* Logros Section */}
      <section id="logros" className="section section-with-bg bg-logros" style={{ backgroundImage: `url(${import.meta.env.BASE_URL}bg_logros.png)` }}>
        <div className="container">
          <div className="reveal text-center">
            <span className="section-subtitle">02. Trayectoria</span>
            <h2 className="section-title">Atleta Paralímpico</h2>
            <p className="text-gray" style={{ maxWidth: '600px', margin: '0 auto 4rem' }}>
              El deporte adaptado es la máxima expresión de lo que el cuerpo y la mente pueden lograr cuando se trabaja con disciplina y pasión por vivir.
            </p>
          </div>

          <div className="timeline">
            <div className="timeline-item reveal">
              <div className="timeline-dot"></div>
              <div className="timeline-content gap-sm flex-col">
                <span className="timeline-date">2024</span>
                <h3 style={{ fontSize: '1.2rem', marginBottom: '0.5rem' }}>1er Lugar Carrera Cinemex 5km</h3>
                <p className="text-gray">Ciudad de México. Demostrando resistencia competitiva en la pista urbana.</p>
              </div>
            </div>
            
            <div className="timeline-item reveal">
              <div className="timeline-dot"></div>
              <div className="timeline-content gap-sm flex-col">
                <span className="timeline-date">Actualidad</span>
                <h3 style={{ fontSize: '1.2rem', marginBottom: '0.5rem' }}>Reptilianos Neza</h3>
                <p className="text-gray">Jugador representativo en Nezahualcóyotl en la liga de baloncesto sobre silla de ruedas.</p>
              </div>
            </div>

            <div className="timeline-item reveal">
              <div className="timeline-dot"></div>
              <div className="timeline-content gap-sm flex-col">
                <span className="timeline-date">Años 90s</span>
                <h3 style={{ fontSize: '1.2rem', marginBottom: '0.5rem' }}>Campeón Nacional de Natación</h3>
                <p className="text-gray">Medallista en los años 1993 y 1994, estableciendo las bases del deporte adaptado en mi vida.</p>
              </div>
            </div>
            
             <div className="timeline-item reveal">
              <div className="timeline-dot"></div>
              <div className="timeline-content gap-sm flex-col">
                <span className="timeline-date">Reconocimientos</span>
                <h3 style={{ fontSize: '1.2rem', marginBottom: '0.5rem' }}>Múltiples Podios y Diplomas</h3>
                <p className="text-gray">Reconocimientos avalando décadas de esfuerzo, resiliencia y fomento al deporte municipal y estatal.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sede VIM Section */}
      <section id="sede" className="section container">
        <div className="reveal">
          <span className="section-subtitle">03. Comunidad</span>
          <h2 className="section-title">VIM Coyotes Neza</h2>
          <p className="text-gray" style={{ maxWidth: '800px', marginBottom: '3rem' }}>
            Aperturamos en Nezahualcóyotl con el incansable apoyo de compañeros para establecer un bastión de independencia. Esta sede es nuestro epicentro para la rehabilitación psicosocial y física.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-md items-center mb-5" style={{ marginBottom: '4rem' }}>
           <div className="about-image reveal">
            <img src={`${import.meta.env.BASE_URL}action_shot.png`} alt="Taller de silla de ruedas y comunidad" />
          </div>
          <div className="features-grid reveal" style={{ gridTemplateColumns: '1fr' }}>
            <div className="feature-card">
              <div className="feature-icon"><Users size={24} /></div>
              <h3 className="feature-title">Cursos Intensivos</h3>
              <p className="text-gray">Enseñanza práctica de manejo de silla de ruedas en ambientes urbanos reales.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon"><MapPin size={24} /></div>
              <h3 className="feature-title">Rodadas Comunitarias</h3>
              <p className="text-gray">Eventos para generar visibilidad y fortalecer los lazos entre nuestros integrantes.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon"><Heart size={24} /></div>
              <h3 className="feature-title">Gestión de Donaciones</h3>
              <p className="text-gray">Entregas de sillas de ruedas funcionales, cambiando el paradigma de las personas beneficiadas.</p>
            </div>
          </div>
        </div>

        <div className="reveal">
          <h3 className="text-orange" style={{ marginBottom: '1rem', marginTop: '2rem' }}>Impacto Social Activo</h3>
          <ul className="text-gray flex-col gap-sm" style={{ listStyleType: 'disc', paddingLeft: '20px' }}>
            <li>Talleres educativos y de concientización en universidades como ICEL y facultades de Fisioterapia.</li>
            <li>Colaboración activa institucional con empresas privadas (Ej. Albany) para fomentar la inclusión laboral.</li>
            <li>Participación en desfiles cívicos (Revolución Mexicana) visibilizando el movimiento social VIM.</li>
          </ul>
        </div>
      </section>

      {/* Calendario Section */}
      <section id="calendario" className="section section-with-bg bg-calendario" style={{ backgroundImage: `url(${import.meta.env.BASE_URL}bg_calendario.jpg)` }}>
        <div className="container">
          <div className="reveal text-center mb-5" style={{ marginBottom: '3rem' }}>
            <span className="section-subtitle">Eventos</span>
            <h2 className="section-title">Calendario de Actividades</h2>
            <p className="text-gray" style={{ maxWidth: '600px', margin: '0 auto' }}>
              Únete a nosotros en nuestras próximas rodadas, competencias de baloncesto en silla de ruedas, y eventos conmemorativos.
            </p>
          </div>

          <div className="features-grid reveal">
            <div className="feature-card glass" style={{ borderTop: '4px solid var(--color-primary-orange)' }}>
              <div className="flex items-center gap-sm" style={{ marginBottom: '1rem' }}>
                <div className="text-orange" style={{ fontSize: '2.5rem', fontWeight: 800, lineHeight: 1 }}>15</div>
                <div className="flex-col">
                  <span className="text-gray" style={{ fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Mayo 2026</span>
                  <span style={{ fontSize: '1.1rem', fontWeight: 600 }}>Rodada por la Inclusión</span>
                </div>
              </div>
              <p className="text-gray" style={{ flexGrow: 1 }}>Rodada comunitaria por las principales avenidas de la ciudad, finalizando con un convivio para fortalecer lazos.</p>
              <div className="flex items-center gap-sm" style={{ marginTop: '1.5rem', borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: '1rem' }}>
                <MapPin size={18} className="text-orange" />
                <span className="text-gray" style={{ fontSize: '0.9rem' }}>Palacio Municipal</span>
              </div>
            </div>

            <div className="feature-card glass" style={{ borderTop: '4px solid var(--color-primary-orange)' }}>
              <div className="flex items-center gap-sm" style={{ marginBottom: '1rem' }}>
                <div className="text-orange" style={{ fontSize: '2.5rem', fontWeight: 800, lineHeight: 1 }}>28</div>
                <div className="flex-col">
                  <span className="text-gray" style={{ fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Mayo 2026</span>
                  <span style={{ fontSize: '1.1rem', fontWeight: 600 }}>Torneo Reptilianos</span>
                </div>
              </div>
              <p className="text-gray" style={{ flexGrow: 1 }}>Competencia estatal de baloncesto sobre silla de ruedas. Ven a apoyar a nuestro equipo representativo.</p>
              <div className="flex items-center gap-sm" style={{ marginTop: '1.5rem', borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: '1rem' }}>
                <Award size={18} className="text-orange" />
                <span className="text-gray" style={{ fontSize: '0.9rem' }}>Deportivo Metropolitano</span>
              </div>
            </div>

            <div className="feature-card glass" style={{ borderTop: '4px solid var(--color-primary-orange)' }}>
              <div className="flex items-center gap-sm" style={{ marginBottom: '1rem' }}>
                <div className="text-orange" style={{ fontSize: '2.5rem', fontWeight: 800, lineHeight: 1 }}>12</div>
                <div className="flex-col">
                  <span className="text-gray" style={{ fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Junio 2026</span>
                  <span style={{ fontSize: '1.1rem', fontWeight: 600 }}>Taller Avanzado VIM</span>
                </div>
              </div>
              <p className="text-gray" style={{ flexGrow: 1 }}>Curso intensivo de manejo de silla de ruedas. Aprende técnicas para superar obstáculos urbanos del día a día.</p>
              <div className="flex items-center gap-sm" style={{ marginTop: '1.5rem', borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: '1rem' }}>
                <Calendar size={18} className="text-orange" />
                <span className="text-gray" style={{ fontSize: '0.9rem' }}>Sede VIM Coyotes Neza</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Voluntariado Section */}
      <section id="voluntariado" className="section section-with-bg bg-voluntariado" style={{ backgroundImage: `url(${import.meta.env.BASE_URL}bg_voluntariado.png)` }}>
        <div className="container">
          <div className="reveal text-center mb-5">
            <span className="section-subtitle">04. Causas</span>
            <h2 className="section-title">Voluntariado y Servicio</h2>
            <div className="quote-box" style={{ maxWidth: '600px', margin: '2rem auto', borderLeft: 'none', borderTop: '4px solid var(--color-primary-orange)' }}>
              "El que no sirve para servir, no sirve para vivir."
            </div>
          </div>

          <div className="features-grid reveal">
            <div className="feature-card">
              <div className="feature-icon"><BookOpen size={24} /></div>
              <h3 className="feature-title">Instructor VIM</h3>
              <p className="text-gray">Formador certificado y activo en el programa de manejo de silla de ruedas para personas de nuevo ingreso.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon"><Shield size={24} /></div>
              <h3 className="feature-title">Aval Ciudadano & Mucpaz</h3>
              <p className="text-gray">Trabajo social colaborando directamente con la policía de género para asegurar entornos seguros.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon"><Heart size={24} /></div>
              <h3 className="feature-title">Enlace CECOSAMA</h3>
              <p className="text-gray">Prevención y atención de adicciones y salud mental. Transmisor oficial del mensaje de Alcohólicos Anónimos (AA).</p>
            </div>
          </div>
        </div>
      </section>

      {/* Galería Section */}
      <section id="galeria" className="section section-with-bg bg-galeria" style={{ backgroundImage: `url(${import.meta.env.BASE_URL}bg_galeria.jpg)` }}>
        <div className="container">
          <div className="reveal">
            <div className="flex justify-between items-end mb-4">
              <div>
                <span className="section-subtitle">Multimedia</span>
                <h2 className="section-title" style={{ marginBottom: 0 }}>Galería</h2>
              </div>
              <div className="text-gray" style={{ marginBottom: '10px' }}>
                Nuestra comunidad en acción
              </div>
            </div>
          </div>

          <div className="gallery-grid reveal">
            <div className="gallery-item">
              <img src={`${import.meta.env.BASE_URL}galeria/1.jpg`} alt="Momentos destacables 1" />
              <div className="gallery-overlay">
                <Camera size={40} className="gallery-icon" />
              </div>
            </div>
            <div className="gallery-item">
              <img src={`${import.meta.env.BASE_URL}galeria/2.jpg`} alt="Momentos destacables 2" />
               <div className="gallery-overlay">
                <Camera size={40} className="gallery-icon" />
              </div>
            </div>
            <div className="gallery-item">
              <img src={`${import.meta.env.BASE_URL}galeria/3.jpg`} alt="Momentos destacables 3" />
               <div className="gallery-overlay">
                <Camera size={40} className="gallery-icon" />
              </div>
            </div>
            <div className="gallery-item">
              <img src={`${import.meta.env.BASE_URL}galeria/4.jpg`} alt="Momentos destacables 4" />
               <div className="gallery-overlay">
                <Camera size={40} className="gallery-icon" />
              </div>
            </div>
            
            <div className="gallery-item" style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
              <iframe 
                src="https://www.youtube.com/embed/3DWn4zd8NR0?rel=0" 
                title="YouTube video player 1" 
                frameBorder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                allowFullScreen
                style={{position: 'absolute', top: 0, left: 0, width: '100%', height: '100%'}}>
              </iframe>
            </div>
            
            <div className="gallery-item" style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
              <iframe 
                src="https://www.youtube.com/embed/hIz0PDNSmJQ?rel=0" 
                title="YouTube video player 2" 
                frameBorder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                allowFullScreen
                style={{position: 'absolute', top: 0, left: 0, width: '100%', height: '100%'}}>
              </iframe>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contacto" className="section section-with-bg bg-contacto" style={{ backgroundImage: `url(${import.meta.env.BASE_URL}bg_contacto.png)` }}>
        <div className="container">
          <div className="reveal">
            <span className="section-subtitle">05. Unirse</span>
            <h2 className="section-title">Contacto</h2>
          </div>

          <div className="contact-container reveal">
            <div>
              <p className="text-gray" style={{ marginBottom: '2rem', fontSize: '1.2rem' }}>
                ¿Estás interesado en unirte a Vida Independiente México o requieres solicitar un taller para tu institución? Estamos para servirte.
              </p>
              
              <div className="contact-info-item">
                <Mail className="contact-icon" size={24} />
                <a href="mailto:baltadif09@gmail.com" className="font-medium hover:text-orange transition-colors">baltadif09@gmail.com</a>
              </div>
              
              <div className="contact-info-item">
                <Phone className="contact-icon" size={24} />
                <a href="tel:+525638512283" className="font-medium hover:text-orange transition-colors">56 3851 2283</a>
              </div>

              <div style={{ marginTop: '2rem' }}>
                <a href="https://facebook.com" target="_blank" rel="noreferrer" className="btn btn-outline" style={{ display: 'inline-flex', gap: '0.5rem' }}>
                  <span className="contact-icon">f</span> Facebook Oficial: VIM Coyotes Neza
                </a>
              </div>
            </div>

            <form className="contact-form glass" style={{ padding: '2rem', borderRadius: '8px' }} onSubmit={(e) => e.preventDefault()}>
              <div className="form-group">
                <input type="text" className="form-control" placeholder="Nombre completo" required />
              </div>
              <div className="form-group">
                <input type="email" className="form-control" placeholder="Correo electrónico" required />
              </div>
              <div className="form-group">
                <textarea className="form-control" placeholder="¿En qué te podemos ayudar? (Solicitud de taller, informes de ingreso, etc.)" required></textarea>
              </div>
              <button type="submit" className="btn btn-primary w-full">
                Enviar Mensaje
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer>
        <div className="container">
          <div className="footer-grid">
            <div>
              <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem' }} className="text-white">
                <span className="text-orange">VIM</span> Coyotes Neza
              </h3>
              <p className="text-gray" style={{ fontSize: '0.9rem' }}>
                Sede oficial en Nezahualcóyotl del movimiento Vida Independiente México. De la depresión a la libertad, sobre ruedas.
              </p>
            </div>
            <div>
              <h4 style={{ marginBottom: '1rem', color: '#fff' }}>Enlaces</h4>
              <ul className="text-gray flex-col gap-sm" style={{ fontSize: '0.9rem' }}>
                <li><a href="#inicio" className="hover:text-orange transition-colors">Inicio</a></li>
                <li><a href="#sobre-mi" className="hover:text-orange transition-colors">Historia</a></li>
                <li><a href="#sede" className="hover:text-orange transition-colors">Nuestra Sede</a></li>
              </ul>
            </div>
            <div>
              <h4 style={{ marginBottom: '1rem', color: '#fff' }}>Aliados & Colaboraciones</h4>
              <ul className="text-gray flex-col gap-sm" style={{ fontSize: '0.9rem' }}>
                <li>DIF Neza</li>
                <li>INCUFIDENE</li>
                <li>Teletón México</li>
                <li>CECOSAMA</li>
              </ul>
            </div>
          </div>
          <div className="footer-bottom">
            &copy; {new Date().getFullYear()} Baltazar Hernández Suástegui - VIM Coyotes Neza. Todos los derechos reservados. <br/>
            Diseñado para transformar realidades.
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
