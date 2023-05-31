import React from "react";

function GoogleMap() {
  return (
    <div className="contact-bottom">
      <div className="contac-bottom">
        <div className="row justify-content-center g-0">
          <div className="col-12">
            <div className="location-map">
              <div id="map">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3724.3832772275523!2d105.77846127443424!3d21.017344788172082!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3134550710b3c227%3A0x36b6c43db9d45e9!2zSG_Mo2Mgdmnhu4duIGPDtG5nIG5naOG7hyBSaWtrZWkgQWNhZGVteQ!5e0!3m2!1svi!2s!4v1684938059106!5m2!1svi!2s"
                  width={600}
                  height={450}
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default GoogleMap;
