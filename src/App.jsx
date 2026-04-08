import { useEffect, useState } from 'react';
import { Menu, X, ChevronRight, Award, MapPin, Heart, Mail, Phone, Users, Shield, BookOpen, Camera, Calendar } from 'lucide-react';
import './App.css';
import { supabase } from './supabaseClient';

function App() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [selectedMedia, setSelectedMedia] = useState(null);

  // Contact Form State
  const [formData, setFormData] = useState({ nombre_completo: '', correo: '', whatsapp: '', mensaje: '' });
  const [formStatus, setFormStatus] = useState('idle'); // idle, submitting, success, error

  const handleContactSubmit = async (e) => {
    e.preventDefault();
    setFormStatus('submitting');
    try {
      const { error } = await supabase.from('leads').insert([formData]);
      if (error) throw error;
      setFormStatus('success');
      setFormData({ nombre_completo: '', correo: '', whatsapp: '', mensaje: '' });
      setTimeout(() => setFormStatus('idle'), 5000);
    } catch (error) {
      console.error("Error al enviar registro:", error);
      setFormStatus('error');
      setTimeout(() => setFormStatus('idle'), 5000);
    }
  };

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
          <a href="#" className="flex items-center gap-sm" style={{ flexWrap: 'wrap' }}>
            <span className="text-orange" style={{ fontWeight: 800, fontSize: '1.2rem', letterSpacing: '-0.02em', lineHeight: 1.1 }}>Vida Independiente México</span>
            <span style={{ fontWeight: 300, fontSize: '1.2rem', lineHeight: 1.1 }}>Coyotes Neza</span>
          </a>
          
          <nav className={`nav-links ${isMenuOpen ? 'open' : ''}`}>
            <a href="#inicio" className="nav-link" onClick={toggleMenu}>Inicio</a>
            <a href="#sobre-mi" className="nav-link" onClick={toggleMenu}>Sobre Mí</a>
            <a href="#logros" className="nav-link" onClick={toggleMenu}>Logros</a>
            <a href="#sede" className="nav-link" onClick={toggleMenu}>La Sede</a>
            <a href="#calendario" className="nav-link" onClick={toggleMenu}>Calendario</a>
            <a href="#voluntariado" className="nav-link" onClick={toggleMenu}>Voluntariado</a>
            <a href="#galeria" className="nav-link" onClick={toggleMenu}>Galería</a>
            <a href="#lideres" className="nav-link" onClick={toggleMenu}>Líderes VIM 2026</a>
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
        
        {/* Informe de Actividades y Trayectoria */}
        <div className="reveal" style={{ marginTop: '5rem', padding: '3rem', background: 'rgba(23, 23, 23, 0.6)', backdropFilter: 'blur(10px)', borderRadius: '16px', border: '1px solid rgba(255, 255, 255, 0.05)' }}>
          <h3 className="text-orange" style={{ fontSize: '1.8rem', marginBottom: '2rem', textAlign: 'center', fontWeight: 800 }}>
            Informe de Actividades y Trayectoria
          </h3>
          
          {/* 1. Identificación */}
          <div style={{ marginBottom: '2.5rem' }}>
            <h4 className="text-white" style={{ fontSize: '1.3rem', marginBottom: '1rem', borderBottom: '2px solid var(--color-primary-orange)', display: 'inline-block', paddingBottom: '0.2rem' }}>1. Identificación del Perfil y Liderazgo</h4>
            <p className="text-gray" style={{ marginBottom: '1rem' }}>
              <strong>Baltazar Hernández Suástegui</strong> se consolida como una figura central en el ecosistema de la sociedad civil organizada en el Estado de México, desempeñándose como coordinador de la sede Vida Independiente México (VIM) Coyotes Neza. Su gestión técnica y política se ha distinguido por transformar la asistencia social en una estrategia de empoderamiento ciudadano para las personas con discapacidad.
            </p>
            <p className="text-gray">
              Bajo su liderazgo, la sede Coyotes Neza ha operado con una misión clara: promover la autonomía plena a través de la formación en el manejo de silla de ruedas de modelo activo, el impulso al deporte adaptado de alto nivel y la gestión estratégica de apoyos sociales. Su enfoque no solo busca la movilidad física, sino la reintegración total de la persona a la vida económica, política y social.
            </p>
          </div>

          {/* 2. Trayectoria */}
          <div style={{ marginBottom: '2.5rem' }}>
            <h4 className="text-white" style={{ fontSize: '1.3rem', marginBottom: '1rem', borderBottom: '2px solid var(--color-primary-orange)', display: 'inline-block', paddingBottom: '0.2rem' }}>2. Trayectoria Deportiva y Reconocimientos (2022-2025)</h4>
            <p className="text-gray" style={{ marginBottom: '1.5rem' }}>
              La trayectoria de Baltazar Hernández Suástegui refleja una versatilidad atlética excepcional, demostrando que el deporte es la piedra angular de la rehabilitación y la visibilidad comunitaria. Su desempeño se divide en dos vertientes competitivas:
            </p>
            
            <h5 className="text-orange" style={{ fontSize: '1.1rem', marginBottom: '0.5rem', fontWeight: 600 }}>Baloncesto sobre Silla de Ruedas</h5>
            <div style={{ overflowX: 'auto', marginBottom: '2rem' }}>
              <table style={{ width: '100%', borderCollapse: 'collapse', color: 'var(--color-light-gray)', fontSize: '0.95rem' }}>
                <thead>
                  <tr style={{ background: 'rgba(255,106,0,0.1)', textAlign: 'left' }}>
                    <th style={{ padding: '0.75rem 1rem', borderBottom: '1px solid rgba(255,106,0,0.3)' }}>Año</th>
                    <th style={{ padding: '0.75rem 1rem', borderBottom: '1px solid rgba(255,106,0,0.3)' }}>Evento / Competencia</th>
                    <th style={{ padding: '0.75rem 1rem', borderBottom: '1px solid rgba(255,106,0,0.3)' }}>Resultado / Lugar</th>
                  </tr>
                </thead>
                <tbody>
                  <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                    <td style={{ padding: '0.75rem 1rem' }}>2022</td>
                    <td style={{ padding: '0.75rem 1rem' }}>Torneo de Basquetbol sobre Silla de Ruedas (31/07)</td>
                    <td style={{ padding: '0.75rem 1rem', color: 'var(--color-white)' }}>Segundo Lugar</td>
                  </tr>
                  <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                    <td style={{ padding: '0.75rem 1rem' }}>2023</td>
                    <td style={{ padding: '0.75rem 1rem' }}>Torneo Hexagonal Neza</td>
                    <td style={{ padding: '0.75rem 1rem', color: 'var(--color-white)' }}>Tercer Lugar</td>
                  </tr>
                  <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                    <td style={{ padding: '0.75rem 1rem' }}>2023</td>
                    <td style={{ padding: '0.75rem 1rem' }}>Torneo Reptilianos Neza (INCUFIDENE)</td>
                    <td style={{ padding: '0.75rem 1rem', color: 'var(--color-primary-orange)' }}>Primer Lugar</td>
                  </tr>
                  <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                    <td style={{ padding: '0.75rem 1rem' }}>2024</td>
                    <td style={{ padding: '0.75rem 1rem' }}>Torneo Villa Vive (31/07)</td>
                    <td style={{ padding: '0.75rem 1rem', color: 'var(--color-primary-orange)' }}>Primer Lugar</td>
                  </tr>
                  <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                    <td style={{ padding: '0.75rem 1rem' }}>2024</td>
                    <td style={{ padding: '0.75rem 1rem' }}>Cuadrangular Deportivo Las Américas, Ecatepec</td>
                    <td style={{ padding: '0.75rem 1rem', color: 'var(--color-white)' }}>Segundo Lugar</td>
                  </tr>
                  <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                    <td style={{ padding: '0.75rem 1rem' }}>2024</td>
                    <td style={{ padding: '0.75rem 1rem' }}>Primera Copa INR LGII Baloncesto</td>
                    <td style={{ padding: '0.75rem 1rem', color: 'var(--color-white)' }}>Participación Destacada</td>
                  </tr>
                  <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                    <td style={{ padding: '0.75rem 1rem' }}>2025</td>
                    <td style={{ padding: '0.75rem 1rem' }}>Encuentro Reptilianos Neza vs. INCUFIDENE</td>
                    <td style={{ padding: '0.75rem 1rem', color: 'var(--color-white)' }}>Liderazgo de Equipo</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h5 className="text-orange" style={{ fontSize: '1.1rem', marginBottom: '0.5rem', fontWeight: 600 }}>Atletismo y Carreras de Velocidad y Fondo</h5>
            <div style={{ overflowX: 'auto', marginBottom: '1.5rem' }}>
              <table style={{ width: '100%', borderCollapse: 'collapse', color: 'var(--color-light-gray)', fontSize: '0.95rem' }}>
                <thead>
                  <tr style={{ background: 'rgba(255,106,0,0.1)', textAlign: 'left' }}>
                    <th style={{ padding: '0.75rem 1rem', borderBottom: '1px solid rgba(255,106,0,0.3)' }}>Año</th>
                    <th style={{ padding: '0.75rem 1rem', borderBottom: '1px solid rgba(255,106,0,0.3)' }}>Evento / Competencia</th>
                    <th style={{ padding: '0.75rem 1rem', borderBottom: '1px solid rgba(255,106,0,0.3)' }}>Resultado / Lugar</th>
                  </tr>
                </thead>
                <tbody>
                  <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                    <td style={{ padding: '0.75rem 1rem' }}>2022</td>
                    <td style={{ padding: '0.75rem 1rem' }}>Abierto Nacional de Deporte Adaptado</td>
                    <td style={{ padding: '0.75rem 1rem', color: 'var(--color-white)' }}>Subcampeón Nacional</td>
                  </tr>
                  <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                    <td style={{ padding: '0.75rem 1rem' }}>2024</td>
                    <td style={{ padding: '0.75rem 1rem' }}>14ª Carrera Futejje - Chapultepec</td>
                    <td style={{ padding: '0.75rem 1rem', color: 'var(--color-primary-orange)' }}>Primer Lugar</td>
                  </tr>
                  <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                    <td style={{ padding: '0.75rem 1rem' }}>2024</td>
                    <td style={{ padding: '0.75rem 1rem' }}>13ª Carrera Cinemex - VIM</td>
                    <td style={{ padding: '0.75rem 1rem', color: 'var(--color-primary-orange)' }}>Primer Lugar</td>
                  </tr>
                  <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                    <td style={{ padding: '0.75rem 1rem' }}>2024</td>
                    <td style={{ padding: '0.75rem 1rem' }}>Carrera "Velocidad Pura" (5 km)</td>
                    <td style={{ padding: '0.75rem 1rem', color: 'var(--color-primary-orange)' }}>Primer Lugar</td>
                  </tr>
                  <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                    <td style={{ padding: '0.75rem 1rem' }}>2024</td>
                    <td style={{ padding: '0.75rem 1rem' }}>"Querétaro no corre vuela" (5 km)</td>
                    <td style={{ padding: '0.75rem 1rem', color: 'var(--color-primary-orange)' }}>Primer Lugar</td>
                  </tr>
                  <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                    <td style={{ padding: '0.75rem 1rem' }}>2024</td>
                    <td style={{ padding: '0.75rem 1rem' }}>"Querétaro no corre vuela" (21 km - Medio Maratón)</td>
                    <td style={{ padding: '0.75rem 1rem', color: 'var(--color-white)' }}>Finalista / Cumplimiento</td>
                  </tr>
                  <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                    <td style={{ padding: '0.75rem 1rem' }}>2024</td>
                    <td style={{ padding: '0.75rem 1rem' }}>Carrera Inclusión y No Discriminación - Teletón Neza</td>
                    <td style={{ padding: '0.75rem 1rem', color: 'var(--color-white)' }}>Segundo Lugar</td>
                  </tr>
                  <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                    <td style={{ padding: '0.75rem 1rem' }}>2024</td>
                    <td style={{ padding: '0.75rem 1rem' }}>Carrera Ruba Race - Jalisco</td>
                    <td style={{ padding: '0.75rem 1rem', color: 'var(--color-white)' }}>Segundo Lugar</td>
                  </tr>
                  <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                    <td style={{ padding: '0.75rem 1rem' }}>2025</td>
                    <td style={{ padding: '0.75rem 1rem' }}>Carrera "Vivir es Increíble" - Autódromo Hnos. Rodríguez</td>
                    <td style={{ padding: '0.75rem 1rem', color: 'var(--color-white)' }}>Segundo Lugar</td>
                  </tr>
                </tbody>
              </table>
            </div>
            
            <div className="quote-box" style={{ marginTop: '2rem', padding: '1.5rem', borderLeft: '4px solid var(--color-primary-orange)', background: 'rgba(255,255,255,0.02)', borderRadius: '0 8px 8px 0' }}>
              <p className="text-gray" style={{ fontStyle: 'italic', margin: 0 }}>
                <strong className="text-white" style={{ fontStyle: 'normal' }}>Hito de Formación Formativa:</strong> El 28 de septiembre de 2024, participó de manera fundamental en la primera clínica de rugby y basquetbol en silla de ruedas dirigida a niños con discapacidad en la República Mexicana, celebrada en la Sede Querétaro, sentando las bases para el relevo generacional en el deporte adaptado.
              </p>
            </div>
          </div>

          {/* 3. Cronología */}
          <div style={{ marginBottom: '2.5rem' }}>
             <h4 className="text-white" style={{ fontSize: '1.3rem', marginBottom: '1rem', borderBottom: '2px solid var(--color-primary-orange)', display: 'inline-block', paddingBottom: '0.2rem' }}>3. Cronología de Labor Social y Gestión Comunitaria (2025)</h4>
             <p className="text-gray" style={{ marginBottom: '1.5rem' }}>Durante el semestre reportado, la coordinación de Coyotes Neza ha impulsado iniciativas de alto impacto, garantizando una presencia institucional ininterrumpida.</p>
             <ul className="text-gray flex-col gap-sm" style={{ paddingLeft: '1.5rem', listStyleType: 'none' }}>
                <li style={{ position: 'relative', paddingLeft: '1.5rem' }}>
                  <span style={{ position: 'absolute', left: 0, top: '8px', width: '6px', height: '6px', borderRadius: '50%', background: 'var(--color-primary-orange)' }}></span>
                  <strong className="text-white">Marzo:</strong> La gestión dinamizó 7 eventos clave, destacando la representación en los Juegos Paraestatales 2025 en Cuautitlán Izcalli. Se priorizó la rehabilitación infantil mediante la donación de sillas de ruedas y la apertura de cursos intensivos de manejo, incluyendo el caso de éxito de la becaria "Lupita".
                </li>
                <li style={{ position: 'relative', paddingLeft: '1.5rem' }}>
                  <span style={{ position: 'absolute', left: 0, top: '8px', width: '6px', height: '6px', borderRadius: '50%', background: 'var(--color-primary-orange)' }}></span>
                  <strong className="text-white">Abril:</strong> Se consolidó la incidencia política mediante un diálogo estratégico con la Ministra Mónica Güicho para el análisis de propuestas en el sector discapacidad. Simultáneamente, se fortaleció el músculo financiero de la organización a través de la campaña de redondeo en tiendas OXXO y la celebración del 6to Aniversario de VIM Tenancingo.
                </li>
                <li style={{ position: 'relative', paddingLeft: '1.5rem' }}>
                  <span style={{ position: 'absolute', left: 0, top: '8px', width: '6px', height: '6px', borderRadius: '50%', background: 'var(--color-primary-orange)' }}></span>
                  <strong className="text-white">Mayo:</strong> La coordinación impulsó 5 iniciativas, entre las que destaca la 11° Carrera "Corre por ti, Camina conmigo". Se reforzó la integración comunitaria con un evento del Día del Niño y la presencia en el 10° Aniversario de VIM Tlaxcala.
                </li>
                <li style={{ position: 'relative', paddingLeft: '1.5rem' }}>
                  <span style={{ position: 'absolute', left: 0, top: '8px', width: '6px', height: '6px', borderRadius: '50%', background: 'var(--color-primary-orange)' }}></span>
                  <strong className="text-white">Junio:</strong> Se establecieron vínculos de alto nivel con el Lic. Pedro Ortega Fonseca (Director General para el Bienestar de Personas con Discapacidad) para la gestión de equipamiento. Asimismo, se expandió la frontera educativa impartiendo un taller de manejo a estudiantes de Fisioterapia de la Universidad ICEL campus Tlalpan.
                </li>
                <li style={{ position: 'relative', paddingLeft: '1.5rem' }}>
                  <span style={{ position: 'absolute', left: 0, top: '8px', width: '6px', height: '6px', borderRadius: '50%', background: 'var(--color-primary-orange)' }}></span>
                  <strong className="text-white">Julio:</strong> Se ejecutaron programas de Responsabilidad Social Corporativa con la empresa Albany International México. Además, se coordinaron prácticas de movilidad urbana avanzada en el sistema de transporte Metro de la CDMX, permitiendo que los usuarios enfrenten barreras arquitectónicas en entornos reales.
                </li>
                <li style={{ position: 'relative', paddingLeft: '1.5rem' }}>
                  <span style={{ position: 'absolute', left: 0, top: '8px', width: '6px', height: '6px', borderRadius: '50%', background: 'var(--color-primary-orange)' }}></span>
                  <strong className="text-white">Agosto:</strong> Periodo de máxima intensidad con 11 eventos registrados. Se consolidó la presencia social en la Marcha Peregrinos de Esperanza y la colaboración con la Biblioteca Móvil de Grupo Andrade. Destaca la integración en la estructura civil-religiosa mediante el servicio pastoral y de cargo colector en la Iglesia San Pedro y San Pablo. El mes culminó con la Rodada del 25 Aniversario de Vida Independiente México.
                </li>
             </ul>
          </div>

          {/* 4. Impacto Social */}
          <div style={{ marginBottom: '2.5rem' }}>
            <h4 className="text-white" style={{ fontSize: '1.3rem', marginBottom: '1rem', borderBottom: '2px solid var(--color-primary-orange)', display: 'inline-block', paddingBottom: '0.2rem' }}>4. Impacto Social e Incidencia en la Autonomía</h4>
            <p className="text-gray" style={{ marginBottom: '1.5rem' }}>La gestión de Baltazar Hernández Suástegui trasciende la asistencia técnica para generar un valor social medible bajo los siguientes pilares:</p>
            <div className="grid grid-cols-2 gap-md" style={{ gap: '1.5rem' }}>
              <div style={{ background: 'rgba(0,0,0,0.2)', padding: '1.5rem', borderRadius: '8px', border: '1px solid rgba(255,255,255,0.02)' }}>
                <h5 className="text-orange" style={{ marginBottom: '0.5rem', fontSize: '1.1rem' }}>Profesionalización de la Salud</h5>
                <p className="text-gray" style={{ fontSize: '0.95rem' }}>Mediante talleres a estudiantes de la Universidad ICEL, se garantiza que los futuros fisioterapeutas comprendan la movilidad desde la perspectiva de la autonomía y no solo de la patología.</p>
              </div>
              <div style={{ background: 'rgba(0,0,0,0.2)', padding: '1.5rem', borderRadius: '8px', border: '1px solid rgba(255,255,255,0.02)' }}>
                <h5 className="text-orange" style={{ marginBottom: '0.5rem', fontSize: '1.1rem' }}>Sensibilización en el Sector Privado</h5>
                <p className="text-gray" style={{ fontSize: '0.95rem' }}>La ejecución de clínicas en Albany International ha permitido que el entorno corporativo reconozca las capacidades de integración de las personas con discapacidad.</p>
              </div>
              <div style={{ background: 'rgba(0,0,0,0.2)', padding: '1.5rem', borderRadius: '8px', border: '1px solid rgba(255,255,255,0.02)' }}>
                <h5 className="text-orange" style={{ marginBottom: '0.5rem', fontSize: '1.1rem' }}>Inclusión Familiar Estratégica</h5>
                <p className="text-gray" style={{ fontSize: '0.95rem' }}>Se ha implementado un modelo donde se involucra a familiares en el entrenamiento para asegurar que el usuario posea un dominio absoluto de la silla de ruedas, instruyendo a la familia para que su rol sea de acompañamiento proactivo.</p>
              </div>
              <div style={{ background: 'rgba(0,0,0,0.2)', padding: '1.5rem', borderRadius: '8px', border: '1px solid rgba(255,255,255,0.02)' }}>
                <h5 className="text-orange" style={{ marginBottom: '0.5rem', fontSize: '1.1rem' }}>Gestión de Bienes de Movilidad</h5>
                <p className="text-gray" style={{ fontSize: '0.95rem' }}>La entrega de sillas de ruedas activas ha permitido que niños y adultos de Nezahualcóyotl transiten de la dependencia al protagonismo social.</p>
              </div>
            </div>
          </div>

          {/* 5. Alianzas */}
          <div style={{ marginBottom: '2.5rem' }}>
            <h4 className="text-white" style={{ fontSize: '1.3rem', marginBottom: '1rem', borderBottom: '2px solid var(--color-primary-orange)', display: 'inline-block', paddingBottom: '0.2rem' }}>5. Alianzas Estratégicas y Colaboración Institucional</h4>
            <p className="text-gray" style={{ marginBottom: '1.5rem' }}>Bajo esta coordinación, la sede Coyotes Neza ha articulado una red robusta de colaboración con diversas entidades:</p>
            <ul className="text-gray" style={{ paddingLeft: '1.5rem' }}>
              <li style={{ marginBottom: '0.5rem', position: 'relative', paddingLeft: '1.5rem' }}><span style={{ position: 'absolute', left: 0, top: '8px', width: '6px', height: '6px', borderRadius: '50%', background: 'var(--color-primary-orange)' }}></span><strong className="text-white">Sector Académico:</strong> Universidad ICEL (Campus Tlalpan).</li>
              <li style={{ marginBottom: '0.5rem', position: 'relative', paddingLeft: '1.5rem' }}><span style={{ position: 'absolute', left: 0, top: '8px', width: '6px', height: '6px', borderRadius: '50%', background: 'var(--color-primary-orange)' }}></span><strong className="text-white">Sector Gubernamental y Salud:</strong> IMSS Bienestar, Cecosama (Centro Comunitario de Salud Mental y Adicciones), Poder Judicial (Oficina de la Ministra Mónica Güicho) y Sistema Metro CDMX.</li>
              <li style={{ marginBottom: '0.5rem', position: 'relative', paddingLeft: '1.5rem' }}><span style={{ position: 'absolute', left: 0, top: '8px', width: '6px', height: '6px', borderRadius: '50%', background: 'var(--color-primary-orange)' }}></span><strong className="text-white">Sector Privado:</strong> Albany International México, Tiendas OXXO, Ford Blue Season y Grupo Andrade (Proyecto Biblioteca Móvil).</li>
              <li style={{ marginBottom: '0.5rem', position: 'relative', paddingLeft: '1.5rem' }}><span style={{ position: 'absolute', left: 0, top: '8px', width: '6px', height: '6px', borderRadius: '50%', background: 'var(--color-primary-orange)' }}></span><strong className="text-white">Sociedad Civil:</strong> Fundación Mexicana de Integración Social I.A.P., Teletón Nezahualcóyotl y APAC.</li>
            </ul>
          </div>

          {/* 6. Conclusión */}
          <div>
            <h4 className="text-white" style={{ fontSize: '1.3rem', marginBottom: '1rem', borderBottom: '2px solid var(--color-primary-orange)', display: 'inline-block', paddingBottom: '0.2rem' }}>6. Conclusión del Informe</h4>
            <p className="text-gray" style={{ marginBottom: '1rem' }}>
              El desempeño de Baltazar Hernández Suástegui durante el periodo 2025 representa un estándar de excelencia en la coordinación de sedes de Vida Independiente México. Con una operatividad del 100% y cumplimiento total de las actividades solicitadas, su labor ha sido fundamental para posicionar a Coyotes Neza como un motor de cambio en la zona oriente del Valle de México.
            </p>
            <p className="text-gray">
              Su compromiso inquebrantable reafirma que la filosofía VIM no es solo una técnica de manejo, sino una postura política y social que exige la libertad total del individuo. Baltazar Hernández Suástegui es, hoy por hoy, un líder indispensable en la construcción de una sociedad sin barreras.
            </p>
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
                <span className="timeline-date">1996</span>
                <h3 style={{ fontSize: '1.2rem', marginBottom: '0.5rem' }}>Recorrido</h3>
                <p className="text-gray">45 Días de Justicia Social para las Personas con Discapacidad.</p>
                <div style={{ marginTop: '0.5rem', background: 'rgba(255,255,255,0.05)', padding: '0.5rem', borderRadius: '8px' }}>
                  <span style={{ display: 'block', fontSize: '0.8rem', color: 'var(--color-primary-orange)', marginBottom: '0.5rem', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.05em' }}>▶ Escuchar relato histórico</span>
                  <audio controls src={`${import.meta.env.BASE_URL}audio_recorrido.m4a`} style={{ width: '100%', height: '36px' }}>
                    Tu navegador no soporta el elemento de audio.
                  </audio>
                </div>
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

          <div className="gallery-carousel reveal">
            <div className="gallery-item" onClick={() => setSelectedMedia({ type: 'image', src: `${import.meta.env.BASE_URL}galeria/1.jpg` })}>
              <img src={`${import.meta.env.BASE_URL}galeria/1.jpg`} alt="Momentos destacables 1" />
              <div className="gallery-overlay">
                <Camera size={40} className="gallery-icon" />
              </div>
            </div>
            <div className="gallery-item" onClick={() => setSelectedMedia({ type: 'image', src: `${import.meta.env.BASE_URL}galeria/2.jpg` })}>
              <img src={`${import.meta.env.BASE_URL}galeria/2.jpg`} alt="Momentos destacables 2" />
               <div className="gallery-overlay">
                <Camera size={40} className="gallery-icon" />
              </div>
            </div>
            <div className="gallery-item" onClick={() => setSelectedMedia({ type: 'image', src: `${import.meta.env.BASE_URL}galeria/3.jpg` })}>
              <img src={`${import.meta.env.BASE_URL}galeria/3.jpg`} alt="Momentos destacables 3" />
               <div className="gallery-overlay">
                <Camera size={40} className="gallery-icon" />
              </div>
            </div>
            <div className="gallery-item" onClick={() => setSelectedMedia({ type: 'image', src: `${import.meta.env.BASE_URL}galeria/4.jpg` })}>
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
                style={{position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', pointerEvents: 'none'}}>
              </iframe>
              <div className="gallery-overlay" style={{ cursor: 'pointer', zIndex: 3 }} onClick={() => setSelectedMedia({ type: 'video', src: 'https://www.youtube.com/embed/3DWn4zd8NR0?rel=0&autoplay=1' })}>
                <span className="text-white font-bold tracking-widest uppercase">▶ Ampliar Video</span>
              </div>
            </div>
            
            <div className="gallery-item" style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
              <iframe 
                src="https://www.youtube.com/embed/hIz0PDNSmJQ?rel=0" 
                title="YouTube video player 2" 
                frameBorder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                allowFullScreen
                style={{position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', pointerEvents: 'none'}}>
              </iframe>
              <div className="gallery-overlay" style={{ cursor: 'pointer', zIndex: 3 }} onClick={() => setSelectedMedia({ type: 'video', src: 'https://www.youtube.com/embed/hIz0PDNSmJQ?rel=0&autoplay=1' })}>
                <span className="text-white font-bold tracking-widest uppercase">▶ Ampliar Video</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Lideres VIM 2026 Section */}
      <section id="lideres" className="section container">
        <div className="reveal">
          <div className="flex justify-between items-end mb-4">
            <div>
              <span className="section-subtitle">Red Nacional</span>
              <h2 className="section-title" style={{ marginBottom: 0 }}>Líderes VIM 2026</h2>
            </div>
          </div>
        </div>
        <div className="reveal" style={{ width: '100%', height: '80vh', borderRadius: '12px', overflow: 'hidden', boxShadow: '0 10px 30px rgba(0,0,0,0.1)', border: '1px solid rgba(0,0,0,0.05)' }}>
          <iframe 
            src={`${import.meta.env.BASE_URL}lideres.html`} 
            style={{ width: '100%', height: '100%', border: 'none' }}
            title="Directorio VIM 2026"
            loading="lazy"
          ></iframe>
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

              <div style={{ marginTop: '2rem', display: 'flex', flexDirection: 'column', gap: '1rem', alignItems: 'flex-start' }}>
                <a href="https://wa.me/525638512283?text=Hola%20Baltazar,%20me%20interesa%20conocer%20m%C3%A1s%20de%20VIM%20Coyotes%20Neza" target="_blank" rel="noreferrer" className="btn btn-primary" style={{ display: 'inline-flex', gap: '0.5rem', background: '#25D366', borderColor: '#25D366' }}>
                  <Phone size={20} /> Escríbeme por WhatsApp
                </a>
                <a href="https://facebook.com" target="_blank" rel="noreferrer" className="btn btn-outline" style={{ display: 'inline-flex', gap: '0.5rem' }}>
                  <span className="contact-icon">f</span> Facebook Oficial: VIM Coyotes Neza
                </a>
              </div>
            </div>

            <form className="contact-form glass" style={{ padding: '2rem', borderRadius: '8px', position: 'relative' }} onSubmit={handleContactSubmit}>
              <div className="form-group">
                <input type="text" className="form-control" placeholder="Nombre completo" value={formData.nombre_completo} onChange={(e) => setFormData({...formData, nombre_completo: e.target.value})} required />
              </div>
              <div className="form-group">
                <input type="email" className="form-control" placeholder="Correo electrónico" value={formData.correo} onChange={(e) => setFormData({...formData, correo: e.target.value})} required />
              </div>
              <div className="form-group">
                <input type="tel" className="form-control" placeholder="Tu número de WhatsApp (10 dígitos)" value={formData.whatsapp} onChange={(e) => setFormData({...formData, whatsapp: e.target.value})} required pattern="[0-9]{10}" title="Un número válido a 10 dígitos" />
              </div>
              <div className="form-group">
                <textarea className="form-control" placeholder="¿En qué te podemos ayudar? (Solicitud de taller, informes de ingreso, etc.)" value={formData.mensaje} onChange={(e) => setFormData({...formData, mensaje: e.target.value})} required></textarea>
              </div>
              
              <button type="submit" className="btn btn-primary w-full" disabled={formStatus === 'submitting'}>
                {formStatus === 'submitting' ? 'Enviando Registro...' : 'Registrarse y Enviar Mensaje'}
              </button>

              {formStatus === 'success' && (
                <div style={{ marginTop: '1rem', padding: '1rem', background: 'rgba(0,255,0,0.1)', color: '#4ade80', borderRadius: '8px', textAlign: 'center', fontWeight: 'bold' }}>
                  ¡Registro exitoso! Nos pondremos en contacto contigo pronto.
                </div>
              )}
              {formStatus === 'error' && (
                <div style={{ marginTop: '1rem', padding: '1rem', background: 'rgba(255,0,0,0.1)', color: '#f87171', borderRadius: '8px', textAlign: 'center', fontWeight: 'bold' }}>
                  Hubo un error al enviar el registro. Por favor intenta más tarde o contáctanos por WhatsApp.
                </div>
              )}
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer>
        <div className="container">
          <div className="footer-grid">
            <div>
              <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem', lineHeight: 1.2 }} className="text-white">
                <span className="text-orange">Vida Independiente México</span> Coyotes Neza
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

      {/* Lightbox / Modal */}
      {selectedMedia && (
        <div className="lightbox" onClick={() => setSelectedMedia(null)}>
          <button className="lightbox-close" onClick={() => setSelectedMedia(null)}>
            <X size={32} />
          </button>
          <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
            {selectedMedia.type === 'image' ? (
              <img src={selectedMedia.src} alt="Vista ampliada" />
            ) : (
              <iframe 
                src={selectedMedia.src}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowFullScreen
              ></iframe>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
