import { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import { supabase } from './Supabase';

export function Header() {
    const [user, setUser] = useState(null);
  
    useEffect(() => {
      // Obtener el usuario actual de Supabase
      const getUser = async () => {
        const { data: { session } } = await supabase.auth.getSession();
        setUser(session?.user ?? null);
      };
  
      getUser();
  
      // Suscribirse a los cambios de autenticación
      const { data: authListener } = supabase.auth.onAuthStateChange((_event, session) => {
        setUser(session?.user ?? null);
      });
  
      // Limpiar la suscripción
      return () => {
        authListener?.subscription.unsubscribe();
      };
    }, []);
  
    return (
      <div className="flex justify-between p-6 items-center text-white">
        <ul className="flex space-x-4">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/game">Juego</Link></li>
        </ul>
        {user ? (
          <ul className="flex space-x-4 ml-auto">
            <li>Bienvenido, {user.email}</li>
            <li><button onClick={async () => {
              await supabase.auth.signOut();
              setUser(null);
            }}>Cerrar sesión</button></li>
          </ul>
        ) : (
          <ul className="flex space-x-4 ml-auto">
            <li><Link to="/login">Login</Link></li>
            <li><Link to="/registro">Registro</Link></li>
          </ul>
        )}
      </div>
    );
  }
