import React from 'react';
import '../assets/footer.css';

function Footer() {
  return (
    <div className="footer">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4  sm:p-0 sm:py-20 px-5 py-20">
          <div className="contact pt-10 sm:pt-0">
            <h3>contact</h3>
            <h4>E-mail</h4>
            <p>maikimmers@gmail.com</p>
            <h4>Locatie</h4>
            <p>Boekel, Noord Brabant</p>
            <h4><a href="https://www.linkedin.com/in/maik-i-92683580/" target="_blank ">LinkedIn</a></h4>
          </div>
          <div className="studies pt-10 sm:pt-0">
            <h3>studies</h3>
            <h4>Avans s’Hertogenbosch</h4>
            <p>CMD Communicatie & Multimedia Design</p>
            <h4>SintLucas Eindhoven</h4>
            <p>Interactief Vormgever</p>
          </div>
          <div className="projecten pt-10 sm:pt-0">
            <h3>projecten</h3>
            <h4>Featly</h4>
            <p>Handpicked Agencies</p>

          </div>
          <div className="doelen pt-10 sm:pt-0">
            <h3>leerdoelen</h3>
            <h4>UX/UI</h4>
            <h4>DTP</h4>
            <h4>Programmeren</h4>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
