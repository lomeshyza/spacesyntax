import { useState,useEffect } from 'react'
import logo from '/react.svg'
import './Footer.scss'

export default function Footer() {
  const [now, setNow] = useState(new Date())


  
    return(
      <footer className='footer'>
        <div className='footer__container'>
          <div className='footer__logo'>|&nbsp;МОДУЛЬ&nbsp;|</div>
          <span>Искусственный интеллект для архитектуры, градостроительства и
            развития комфортной городской среды</span>
        </div>
        <div className='footer__menu'>
          <ul>
            <h4>О компании</h4>
            <li>Команда</li>
            <li>Новости</li>
            <li>Download</li>
          </ul>
          <ul>
            <h4>Документация</h4>
            <li>Site Editor</li>
            <li>Patterns</li>
            <li>Templates</li>
          </ul>
          <ul>
            <h4>Информация</h4>
            <li>Contact</li>
            <li>Privacy</li>
            <li>Terms</li>
          </ul>
        </div>
      </footer>
    )
  }