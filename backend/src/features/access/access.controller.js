// PRUEBA TEMPORAL

import {accessService} from "./access.service.js";

export const accessController = {
    async testPermission(req, res) {
        const userID = Number(req.params.userID);

        const hasPermission = await accessService.hasPermission(
            userID,
            "list_user",
        );
        
        res.json({
            userId,
            permission: "list_user",
            granted: hasPermission,
        });
    },
};