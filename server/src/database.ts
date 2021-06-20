import { createPool, Pool } from 'mysql2/promise'

export async function connect(): Promise<Pool> {
    const connection = await createPool({
        host: '35.238.213.225',
        user: '---',
        password:'---',
        database: 'practica1',
        connectionLimit: 10000
    });
    return connection;
    
}
