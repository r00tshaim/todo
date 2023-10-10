import React from 'react'
import { useTranslation } from 'react-i18next'

function Header() {
  const { t } = useTranslation();
  return (
    <div className="navbar bg-base-100">
  <div className="flex-1">
    <a className="btn btn-ghost normal-case text-xl">daisyUI</a>
  </div>
  <div className="flex-none gap-2">
    <div className="form-control">
      <input type="text" placeholder="Search" className="input input-bordered w-24 md:w-auto" />
    </div>
    <div className="dropdown dropdown-end">
      <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
        <div className="w-10 rounded-full">
          <img src="/images/stock/photo-1534528741775-53994a69daeb.jpg" />
        </div>
      </label>
      <ul tabIndex={0} className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
        <li>
          <a className="justify-between">
            {t('profile')}
            <span className="badge">{t('new')}</span>
          </a>
        </li>
        <li><a>{t('settings')}</a></li>
        <li><a>{t('logout')}</a></li>
      </ul>
    </div>
  </div>
</div>
  )
}

export default Header