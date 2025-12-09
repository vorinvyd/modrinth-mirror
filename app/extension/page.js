export const metadata = {
  title: 'Расширение ModrinthProxy - Автоматический редирект с Modrinth',
  description: 'Официальное браузерное расширение ModrinthProxy для автоматического перенаправления с modrinth.com на modrinth.black',
}

export default function ExtensionPage() {
  return (
    <div className="min-h-screen">
      <div className="max-w-6xl mx-auto px-4 py-8">
        
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-flex items-center gap-4 mb-6">
            <div className="w-20 h-20 bg-gradient-to-br from-modrinth-green to-modrinth-green-light rounded-2xl flex items-center justify-center shadow-2xl">
              <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
              </svg>
            </div>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-black mb-6 bg-gradient-to-r from-modrinth-green via-blue-400 to-purple-400 bg-clip-text text-transparent">
            Расширение ModrinthProxy
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Автоматически перенаправляет с Modrinth на modrinth.black
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          <div className="space-y-8">
            <div className="bg-gradient-to-br from-modrinth-green/10 to-transparent rounded-3xl p-8 shadow-2xl">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-modrinth-green/20 rounded-xl flex items-center justify-center">
                  <svg className="w-6 h-6 text-modrinth-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h2 className="text-3xl font-bold text-white">Что это?</h2>
              </div>
              
              <p className="text-lg text-gray-300 leading-relaxed mb-6">
                Официальное браузерное расширение, которое автоматически перенаправляет все ссылки с 
                <span className="text-modrinth-green font-semibold"> modrinth.com</span> на 
                <span className="text-modrinth-green font-semibold"> modrinth.black</span>
              </p>
              
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-modrinth-green rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-gray-300">Мгновенное перенаправление</span>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-modrinth-green rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-gray-300">Работает на всех страницах Modrinth</span>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-modrinth-green rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-gray-300">Сохраняет все параметры URL</span>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-modrinth-green rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-gray-300">Легкое и быстрое</span>
                </div>
              </div>
            </div>

          </div>

          <div className="space-y-8">
            <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-3xl p-8 shadow-2xl">
              <h2 className="text-3xl font-bold text-white mb-6 flex items-center gap-3">
                <svg className="w-8 h-8 text-modrinth-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                Установка
              </h2>
              
              <div className="rounded-2xl p-8">
                <div className="mb-6">
                  <h3 className="text-2xl font-bold text-white">Chrome Web Store</h3>
                  <p className="text-gray-300">Официальное расширение от modrinth.black</p>
                </div>
                
                <p className="text-lg text-gray-300 mb-6">
                  Поддерживает Chrome, Edge, Opera, Brave и другие браузеры на базе Chromium
                </p>
                
                <a 
                  href="https://chromewebstore.google.com/detail/modrinth-redirect/poamgpbaabemlgienajmcolicdiapekg"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full bg-gradient-to-r from-modrinth-green to-modrinth-green-light text-black font-bold py-4 px-8 rounded-2xl hover:from-modrinth-green-light hover:to-modrinth-green transition-all duration-300 transform hover:scale-95 shadow-xl text-center"
                >
                  <div className="flex items-center justify-center gap-3">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                    Установить из Chrome Web Store
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-br from-blue-500/10 via-purple-500/10 to-modrinth-green/10 rounded-3xl p-4 md:p-8 shadow-2xl border border-modrinth-green/20 mb-16">
          <div className="flex items-center gap-3 md:gap-4 mb-6 md:mb-8">
            <div className="w-10 h-10 md:w-12 md:h-12 bg-gradient-to-br from-blue-500 to-purple-500 rounded-xl flex items-center justify-center shadow-lg">
              <svg className="w-5 h-5 md:w-6 md:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-white">Как это мне поможет?</h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            <div className="p-4 md:p-6 bg-gray-800/50 rounded-xl hover:bg-gray-800/70 transition-colors text-center flex flex-col items-center">
              <div className="w-8 h-8 bg-modrinth-green rounded-full flex items-center justify-center mb-3 md:mb-4">
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z" />
                </svg>
              </div>
              <p className="text-gray-200 font-medium mb-2">Не нужно изменять закладки оригинального Modrinth</p>
              <p className="text-gray-400 text-sm">Все ваши сохраненные ссылки продолжают вести туда же, но теперь открываются в знакомом русскоязычном интерфейсе modrinth.black без каких‑либо правок с вашей стороны</p>
            </div>
            
            <div className="p-4 md:p-6 bg-gray-800/50 rounded-xl hover:bg-gray-800/70 transition-colors text-center flex flex-col items-center">
              <div className="w-8 h-8 bg-modrinth-green rounded-full flex items-center justify-center mb-3 md:mb-4">
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                </svg>
              </div>
              <p className="text-gray-200 font-medium mb-2">Можно спокойно переходить по ссылкам Modrinth</p>
              <p className="text-gray-400 text-sm">Любые ссылки с modrinth.com теперь сразу открываются на modrinth.black, поэтому вы экономите клики и время — расширение берёт рутину на себя</p>
            </div>
            
            <div className="p-4 md:p-6 bg-gray-800/50 rounded-xl hover:bg-gray-800/70 transition-colors text-center flex flex-col items-center">
              <div className="w-8 h-8 bg-modrinth-green rounded-full flex items-center justify-center mb-3 md:mb-4">
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <p className="text-gray-200 font-medium mb-2">Не нужно менять привычки</p>
              <p className="text-gray-400 text-sm">Работайте с Modrinth как обычно: привычные вкладки, поиск и загрузки остаются, а расширение незаметно подхватывает ссылки и открывает их на modrinth.black, чтобы вы получили ту же ленту — только быстрее и удобнее</p>
            </div>
            
            <div className="p-4 md:p-6 bg-gray-800/50 rounded-xl hover:bg-gray-800/70 transition-colors text-center flex flex-col items-center">
              <div className="w-8 h-8 bg-modrinth-green rounded-full flex items-center justify-center mb-3 md:mb-4">
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <p className="text-gray-200 font-medium mb-2">Закрепите расширение в браузере</p>
              <p className="text-gray-400 text-sm">Закрепите кнопку расширения и управляйте им одним нажатием: включайте, когда нужен комфортный русский интерфейс, и выключайте в любой момент без лишних настроек</p>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-br from-modrinth-green/5 to-transparent rounded-3xl p-8 md:p-12 shadow-2xl">
          <div className="text-center mb-8">
            <h2 className="text-4xl font-bold text-white mb-4">Как это работает?</h2>
            <p className="text-xl text-gray-400">Простой и прозрачный процесс</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-modrinth-green to-modrinth-green-light rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-xl">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9v-9m0-9v9" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-white mb-3">Переход на Modrinth</h3>
              <p className="text-gray-400">Вы переходите по любой ссылке на modrinth.com</p>
            </div>
            
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-xl">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-white mb-3">Автоматический редирект</h3>
              <p className="text-gray-400">Расширение мгновенно перенаправляет на modrinth.black</p>
            </div>
            
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-xl">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-white mb-3">Готово!</h3>
              <p className="text-gray-400">Вы попадаете на русскоязычную версию сайта</p>
            </div>
          </div>
        </div>

        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-modrinth-green/10 to-transparent rounded-3xl p-8 md:p-12 shadow-2xl">
            <h2 className="text-4xl font-bold text-white mb-6">Начните использовать прямо сейчас</h2>
            <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
              Установите расширение и наслаждайтесь удобным русскоязычным интерфейсом ModrinthProxy
            </p>
            
            <div className="flex justify-center">
              <a 
                href="https://chromewebstore.google.com/detail/modrinth-redirect/poamgpbaabemlgienajmcolicdiapekg"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gradient-to-r from-modrinth-green to-modrinth-green-light text-black font-bold py-4 px-8 rounded-2xl hover:from-modrinth-green-light hover:to-modrinth-green transition-all duration-300 transform hover:scale-95 shadow-xl"
              >
                <div className="flex items-center justify-center gap-3">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  Установить расширение
                </div>
              </a>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}
