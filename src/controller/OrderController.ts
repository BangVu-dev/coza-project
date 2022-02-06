import axios from "axios";
import { setToken } from ".";
import { UserOrderInfo } from "../model/UserOrderInfo";

class OrderController {

    async delivery(dataOrder: UserOrderInfo) {
        return setToken.post('/checkout/delivery', { dataOrder }).then(res => {
            return res.data;
        })
    }

    async listOrder(userId: string, page: number, rowsPerPage: number) {
        return setToken.post('/orders', { userId, page, rowsPerPage })
            .then(res => {
                return res.data;
            })
    }

}

export const orderController = new OrderController();