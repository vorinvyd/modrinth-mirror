'use client'

import DownloadButtonWithPopover from '../components/DownloadButtonWithPopover'
import { WindowsIcon, MacOSIcon, LinuxIcon } from '../components/icons'

export const DownloadSection = ({ launcherData }) => {
  if (!launcherData) {
    return (
      <div className="col-span-3 text-center py-12">
        <p className="text-gray-400">Не удалось загрузить информацию о версиях</p>
      </div>
    )
  }

  return (
    <>
      <div className="rounded-3xl p-8 flex flex-col items-center text-center w-full md:w-auto">
        <WindowsIcon />
        <h3 className="text-2xl font-bold text-white mb-2">Windows</h3>
        <p className="text-gray-400 mb-6">Установщик для Windows 64-bit</p>
        <DownloadButtonWithPopover
          buttonText="Скачать для Windows"
          officialUrl={launcherData.downloads.windows}
          pirateUrl="https://git.astralium.su/didirus/AstralRinth/releases/download/AR-0.10.1601/AstralRinth%20App_0.10.1601_x64-setup.exe"
        />
      </div>

      <div className="divider hidden md:block"></div>

      <div className="rounded-3xl p-8 flex flex-col items-center text-center w-full md:w-auto">
        <MacOSIcon />
        <h3 className="text-2xl font-bold text-white mb-2">macOS</h3>
        <p className="text-gray-400 mb-6">Универсальный DMG для macOS</p>
        <DownloadButtonWithPopover
          buttonText="Скачать для macOS"
          officialUrl={launcherData.downloads.macos}
          pirateUrl="https://git.astralium.su/didirus/AstralRinth/releases/download/AR-0.10.1601/AstralRinth%20App_0.10.1601_aarch64.dmg"
        />
      </div>

      <div className="divider hidden md:block"></div>

      <div className="rounded-3xl p-8 flex flex-col items-center text-center w-full md:w-auto">
        <LinuxIcon />
        <h3 className="text-2xl font-bold text-white mb-2">Linux<span className="text-sm text-gray-500 ml-2">*</span></h3>
        <p className="text-gray-400 mb-6">AppImage, DEB и RPM пакеты</p>
        <div className="w-full">
          <DownloadButtonWithPopover
            buttonText="AppImage"
            officialUrl={launcherData.downloads.linux.appimage}
            pirateUrl="https://git.astralium.su/didirus/AstralRinth/releases/download/AR-0.10.1601/AstralRinth%20App_0.10.1601_amd64.AppImage"
          />
          <div className="-mt-4">
            <DownloadButtonWithPopover
              buttonText="DEB"
              officialUrl={launcherData.downloads.linux.deb}
              pirateUrl="https://git.astralium.su/didirus/AstralRinth/releases/download/AR-0.10.1601/AstralRinth%20App_0.10.1601_amd64.deb"
            />
          </div>
          <div className="-mt-4">
            <DownloadButtonWithPopover
              buttonText="RPM"
              officialUrl={launcherData.downloads.linux.rpm}
              pirateUrl="https://git.astralium.su/didirus/AstralRinth/releases/download/AR-0.10.1601/AstralRinth%20App-0.10.1601-1.x86_64.rpm"
            />
          </div>
        </div>
        <a
          href="https://support.modrinth.com/en/articles/9298760"
          target="_blank"
          rel="noopener noreferrer"
          className="download-link-sm mt-2 w-full"
        >
          <div className="flex items-center justify-center gap-2">
            <svg className="w-4 h-4" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24">
              <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path>
              <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path>
            </svg>
            <span>Сторонние пакеты</span>
          </div>
        </a>
      </div>
    </>
  )
}
