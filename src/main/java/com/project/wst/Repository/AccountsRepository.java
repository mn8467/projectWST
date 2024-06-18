
package com.project.wst.Repository;

import com.project.wst.Model.Account;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface AccountsRepository extends JpaRepository<Account, Integer> {
    List<Account> findUserListByUserCode(Integer id);
}
