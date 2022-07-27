import axios from 'axios';
import ResultCard from 'components/ResultCard';
import { useState } from 'react';

import './styles.css';

type FormData = {
  user: string;
};

type Address = {
  avatar_url: string;
  url: string;
  followers: string;
  location: string;
  name: string;
};

const UserSearch = () => {
  const [address, setAddress] = useState<Address>();

  const [formData, setFormData] = useState<FormData>({
    user: '',
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const name = event.target.name;
    const value = event.target.value;

    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    axios
      .get(`https://api.github.com/users/${formData.user}`)
      .then((response) => {
        setAddress(response.data);
      })
      .catch((error) => {
        setAddress(undefined);
      });
  };

  return (
    <>
      <div className="block-container">
        <div className="main-container">
          <h1>Encontre um perfil Github</h1>
          <div>
            <div className="search-container">
              <form onSubmit={handleSubmit}>
                <div className="form-container">
                  <input
                    className="search-input"
                    type="text"
                    name="user"
                    value={formData.user}
                    placeholder="Usuário Github"
                    onChange={handleChange}
                  />
                  <button
                    type="submit"
                    className="btn btn-primary search-button"
                  >
                    Começar
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      
        {address && (
         <div className="result-card-container"> 
          <div className="card-container">
            <img src={address.avatar_url} alt="Foto" />
            <div className="text-info-container">
              
              <h2>Informações</h2>
                <ResultCard title="Perfil" description={address.url} />
                <ResultCard
                  title="Seguidores"
                  description={address.followers}
                />
                <ResultCard title="Localidade" description={address.location} />
                <ResultCard title="Nome" description={address.name} />
              
            </div>
          </div>
          </div>  
        )}
      
    </>
  );
};

export default UserSearch;
