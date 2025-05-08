// Пример учетных данных (в реальном приложении они должны храниться безопасно)
const validCredentials = {
    'admin': 'password123',
    'user': 'user123'
};

// Обработчик POST-запросов
self.addEventListener('fetch', event => {
    if (event.request.url.endsWith('/auth') && event.request.method === 'POST') {
        event.respondWith(
            event.request.json().then(data => {
                const { username, password } = data;
                
                // Проверяем учетные данные
                if (validCredentials[username] === password) {
                    return new Response(JSON.stringify({
                        success: true,
                        message: 'Авторизация успешна'
                    }), {
                        headers: { 'Content-Type': 'application/json' }
                    });
                } else {
                    return new Response(JSON.stringify({
                        success: false,
                        message: 'Неверный логин или пароль'
                    }), {
                        headers: { 'Content-Type': 'application/json' }
                    });
                }
            })
        );
    }
}); 