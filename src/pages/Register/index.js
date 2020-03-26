import React from "react";
import { Link } from "react-router-dom";

import { FiArrowLeft } from "react-icons/fi";

import logoImg from "../../assets/logo.svg";

import "./style.css";

export default function Register() {
  return (
    <div class="register-container">
      <div className="content">
        <section>
          <img src={logoImg} alt="Be The Hero" />

          <h1>Cadastro</h1>
          <p>
            Faça seu cadastro, entre na plataforma e ajude pessoas a encontrarem
            os casos da sua Ong.
          </p>

          <Link className="back-link" to="/">
            <FiArrowLeft size={16} color="#e02041" />
            Volte para o logon
          </Link>
        </section>

        <form>
          <input placeholder="Nome da ONG" />
          <input type="email" placeholder="E-mail" />
          <input type="text" placeholder="WhatsApp" />

          <div className="input-group">
            <input type="text" placeholder="Cidade" />
            <input type="text" placeholder="UF" style={{ width: 80 }} />
          </div>

          <button className="button" type="submit">
            Cadastar
          </button>
        </form>
      </div>
    </div>
  );
}
