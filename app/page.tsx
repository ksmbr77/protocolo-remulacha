import Script from "next/script"

export default function VSLPage() {
  return (
    <>
      <Script
        id="vturb-sdk-script"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            try {
              var s = document.createElement("script");
              s.src = "https://scripts.converteai.net/lib/js/smartplayer-wc/v4/sdk.js";
              s.async = true;
              s.onerror = function() {
                console.error('Failed to load video SDK script');
              };
              s.onload = function() {
                console.log('Video SDK loaded successfully');
              };
              document.head.appendChild(s);
            } catch (error) {
              console.error('Error loading video SDK:', error);
            }
          `,
        }}
      />

      <Script
        id="video-cta-delay"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            // O botão de compra aparecerá aos 31 minutos (1860 segundos)
            var delaySeconds = 1860;
            
            function initializeVideoDelay() {
              // Aguardar o iframe carregar completamente
              var iframe = document.getElementById('ifr_685f7df11360073ec94270cb');
              
              if (iframe) {
                iframe.addEventListener('load', function() {
                  console.log("Video iframe loaded, setting up delay for CTA");
                  
                  // Usar setTimeout como fallback para mostrar CTA após 31 minutos
                  setTimeout(function() {
                    var ctaElements = document.querySelectorAll('.cta-esconder');
                    ctaElements.forEach(function(el) {
                      el.style.display = 'block';
                      el.classList.remove('cta-esconder');
                      el.style.animation = 'fadeIn 0.5s ease-in';
                    });
                    console.log("CTA elements displayed after delay");
                  }, delaySeconds * 1000);
                });
              } else {
                // Retry after 1 second if iframe not found
                setTimeout(initializeVideoDelay, 1000);
              }
            }
            
            // Add CSS for fade in animation
            var style = document.createElement('style');
            style.textContent = \`
              @keyframes fadeIn {
                from { opacity: 0; transform: translateY(20px); }
                to { opacity: 1; transform: translateY(0); }
              }
            \`;
            document.head.appendChild(style);
            
            // Initialize when DOM is ready
            if (document.readyState === 'loading') {
              document.addEventListener('DOMContentLoaded', initializeVideoDelay);
            } else {
              initializeVideoDelay();
            }
          `,
        }}
      />

      <Script
        id="iframe-loader"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            // Load the iframe source after the page loads
            function loadIframe() {
              var iframe = document.getElementById('ifr_685f7df11360073ec94270cb');
              if (iframe && iframe.src === 'about:blank') {
                var search = window.location.search || '?';
                var vl = encodeURIComponent(window.location.href);
                iframe.src = 'https://scripts.converteai.net/7e36cdf6-8f2d-4adf-9c73-eb7c42755be9/players/685f7df11360073ec94270cb/v4/embed.html' + search + '&vl=' + vl;
              }
            }
            
            if (document.readyState === 'loading') {
              document.addEventListener('DOMContentLoaded', loadIframe);
            } else {
              loadIframe();
            }
          `,
        }}
      />

      <Script
        id="meta-pixel"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            !function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';n.queue=[];t=b.createElement(e);t.async=!0;t.src=v;s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)}(window, document,'script','https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '1064652811780217');
            fbq('track', 'PageView');
          `,
        }}
      />

      <noscript>
        <img
          height="1"
          width="1"
          style={{ display: "none" }}
          src="https://www.facebook.com/tr?id=1064652811780217&ev=PageView&noscript=1"
          alt=""
        />
      </noscript>

      <div className="min-h-screen bg-white">
        <div className="container mx-auto px-3 md:px-4 py-4 md:py-8 max-w-4xl">
          {/* Main Headline */}
          <div className="text-center mb-8">
            <h1
              className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold leading-tight mb-4 md:mb-6 px-2"
              style={{ color: "#111" }}
            >
              El secreto para controlar tu azúcar de noche — que las grandes farmacéuticas preferirían mantener{" "}
              <span style={{ color: "#E63946" }}>oculto</span>.
            </h1>

            <p className="text-base md:text-lg lg:text-xl mb-6 md:mb-8 leading-relaxed px-2" style={{ color: "#555" }}>
              Un simple hábito casero que ayuda a tu hígado a liberar menos azúcar mientras duermes —{" "}
              <span style={{ color: "#3B82F6" }}>sin pastillas</span> ni efectos secundarios.
            </p>
          </div>

          {/* Video Section */}
          <div className="flex justify-center mb-8 md:mb-12 px-2">
            <div className="w-full max-w-3xl">
              <div className="relative bg-black rounded-lg overflow-hidden shadow-xl md:shadow-2xl">
                <div id="ifr_685f7df11360073ec94270cb_wrapper" style={{ margin: "0 auto", width: "100%" }}>
                  <div
                    style={{ padding: "56.25% 0 0 0", position: "relative" }}
                    id="ifr_685f7df11360073ec94270cb_aspect"
                  >
                    <iframe
                      frameBorder="0"
                      allowFullScreen
                      src="about:blank"
                      id="ifr_685f7df11360073ec94270cb"
                      style={{
                        position: "absolute",
                        top: 0,
                        left: 0,
                        width: "100%",
                        height: "100%",
                        borderRadius: "8px",
                      }}
                      referrerPolicy="origin"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* CTA Section - Hidden initially, shown after 31 minutes */}
          <div className="cta-esconder" style={{ display: "none" }}>
            <div className="text-center mb-8 md:mb-12 px-2">
              <div className="bg-gradient-to-r from-green-500 to-emerald-600 rounded-2xl p-6 md:p-8 shadow-2xl max-w-2xl mx-auto">
                <div className="text-white">
                  <h2 className="text-2xl md:text-3xl font-bold mb-4">
                    ¡Aprovecha esta oportunidad única ahora mismo!
                  </h2>
                  <p className="text-lg md:text-xl mb-6 opacity-90">
                    Acceso exclusivo al método completo por tiempo limitado
                  </p>

                  <a href="URL_DO_SEU_CHECKOUT" className="inline-block w-full md:w-auto">
                    <button className="w-full md:w-auto bg-yellow-400 hover:bg-yellow-500 text-black font-bold text-xl md:text-2xl py-4 px-8 md:px-12 rounded-xl shadow-lg transform hover:scale-105 transition-all duration-300 border-4 border-yellow-300">
                      🔥 ¡QUIERO COMPRAR AHORA! 🔥
                    </button>
                  </a>

                  <div className="mt-6 flex flex-col md:flex-row items-center justify-center gap-4 text-sm">
                    <div className="flex items-center gap-2">
                      <span className="text-green-200">✓</span>
                      <span>Garantía de 60 días</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-green-200">✓</span>
                      <span>Acceso inmediato</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-green-200">✓</span>
                      <span>100% seguro</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Urgency Section */}
            <div className="text-center mb-8 px-2">
              <div className="bg-red-50 border-2 border-red-200 rounded-xl p-4 md:p-6 max-w-xl mx-auto">
                <div className="text-red-800">
                  <h3 className="font-bold text-lg md:text-xl mb-2">⚠️ OFERTA POR TIEMPO LIMITADO</h3>
                  <p className="text-sm md:text-base">
                    Esta página se cerrará automáticamente en <span className="font-bold">24 horas</span>. No pierdas
                    esta oportunidad única.
                  </p>
                </div>
              </div>
            </div>

            {/* Testimonial Section */}
            <div className="text-center mb-8 px-2">
              <div className="bg-blue-50 border border-blue-200 rounded-xl p-6 max-w-2xl mx-auto">
                <div className="flex flex-col md:flex-row items-center gap-4">
                  <div className="w-16 h-16 bg-blue-200 rounded-full flex items-center justify-center text-2xl">
                    👨‍⚕️
                  </div>
                  <div className="text-left">
                    <p className="text-blue-800 italic mb-2">
                      "He visto resultados increíbles en mis pacientes que siguen este protocolo. Es una alternativa
                      natural muy efectiva."
                    </p>
                    <p className="text-blue-600 font-semibold text-sm">- Dr. Carlos Mendoza, Endocrinólogo</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* University References */}
          <div className="text-center space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 mt-8 md:mt-12 px-2">
              <div className="text-center p-4 md:p-6 bg-blue-50 rounded-lg border border-blue-100">
                <div className="text-2xl md:text-3xl mb-2 md:mb-3">🎓</div>
                <h3 className="font-semibold text-blue-800 mb-1 md:mb-2 text-sm md:text-base">Harvard Medical</h3>
                <p className="text-blue-600 text-xs md:text-sm">Estudios confirman la efectividad del método</p>
              </div>

              <div className="text-center p-4 md:p-6 bg-blue-50 rounded-lg border border-blue-100">
                <div className="text-2xl md:text-3xl mb-2 md:mb-3">🏥</div>
                <h3 className="font-semibold text-blue-800 mb-1 md:mb-2 text-sm md:text-base">Mayo Clinic</h3>
                <p className="text-blue-600 text-xs md:text-sm">Investigación respalda los resultados</p>
              </div>

              <div className="text-center p-4 md:p-6 bg-blue-50 rounded-lg border border-blue-100">
                <div className="text-2xl md:text-3xl mb-2 md:mb-3">🔬</div>
                <h3 className="font-semibold text-blue-800 mb-1 md:mb-2 text-sm md:text-base">Stanford University</h3>
                <p className="text-blue-600 text-xs md:text-sm">Validación científica del protocolo</p>
              </div>
            </div>

            <div className="mt-8 md:mt-12 flex justify-center px-2">
              <div className="bg-green-50 border-2 border-green-200 rounded-xl p-6 md:p-8 max-w-sm md:max-w-md text-center w-full">
                <div className="text-3xl md:text-4xl mb-3 md:mb-4">🛡️</div>
                <h3 className="text-lg md:text-xl font-bold text-green-800 mb-2">Garantía de 60 Días</h3>
                <p className="text-green-700 text-sm leading-relaxed">
                  Si no ves resultados en los primeros 60 días, te devolvemos el 100% de tu dinero. Sin preguntas.
                </p>
                <div className="mt-3 md:mt-4 text-xs text-green-600 font-medium">
                  ✓ Garantía Total • ✓ Sin Riesgo • ✓ 100% Seguro
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
