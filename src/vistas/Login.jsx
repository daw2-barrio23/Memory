import { useState } from 'react';

export function Login() {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Guardar los datos en localStorage
    localStorage.setItem('loginData', JSON.stringify(formData));
    // Lógica para enviar los datos al servidor o realizar otras acciones
    console.log('Datos guardados:', formData);
    // Limpiar los campos después de guardar los datos
    setFormData({
      email: '',
      password: ''
    });
  };

  return (
    <div className="flex items-center justify-center ">
      <div className="bg-white p-8 rounded shadow-md max-w-md w-full mt-20">
        <h2 className="text-2xl font-semibold mb-6">Iniciar sesión</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700 font-semibold mb-2">Correo electrónico</label>
            <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} className="border rounded w-full px-3 py-2" placeholder="Correo electrónico" />
          </div>
          <div className="mb-6">
            <label htmlFor="password" className="block text-gray-700 font-semibold mb-2">Contraseña</label>
            <input type="password" id="password" name="password" value={formData.password} onChange={handleChange} className="border rounded w-full px-3 py-2" placeholder="Contraseña" />
          </div>
          <button type="submit" className="bg-blue-500 hover:bg-blue-600 text-white font-semibold px-4 py-2 rounded w-full">Iniciar sesión</button>
        </form>
      </div>
    </div>
  );
}