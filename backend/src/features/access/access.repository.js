// backend/src/features/access/access.repository.js

import {pool} from "../../config/db.js"

export const accessRepository = {
    async getUserPermissions(userID) {
        const query = `SELECT is_superuser
        FROM users
        WHERE id = $1`;

        const result = await pool.query(query, [userID]);
        return result.rows[0]?.is_superuser ?? false;

    },

        async getUserPermissions(userID){
        const query = `SELECT DISTINCT p.permission_codename
        
        FROM permission p
        
        INNER JOIN user_permissions up
            ON up.permission_id = p.permission_id
            
        WHERE up.user_id =$1
        
        UNION

        SELECT DISTINCT p.permission_codename

        FROM permissons p 

        INNER JOIN group_permissions gp
        ON gp.permission_id = p.permission_id

        INNER JOIN user_groups ug ON ug.group_id

        WHERE ug.user_id = $1
        `;

        const result = await pool.query(query, [userId]);

        return result.rows;
        }
    }