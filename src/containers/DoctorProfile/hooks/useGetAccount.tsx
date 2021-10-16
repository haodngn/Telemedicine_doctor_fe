import { useQuery } from "react-query";

import { Account } from "src/common/models/Account.model";
import AccountService from "src/containers/Account/services/Account.service";

export enum AccountStateKeysEnum {
    Accounts = "accounts",
}

const useGetAccount = (email: string = "nhanlt16235@gmail.com") => {
    let accountService = new AccountService<Account>();
    const result = useQuery<Account, Error>([AccountStateKeysEnum.Accounts, email], async () => {
        const result = await accountService.getAccountByEmail(email);
        return result.data;
    });

    return result;
};

export default useGetAccount;
