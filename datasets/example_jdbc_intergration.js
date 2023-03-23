function createDataset(fields, constraints, sortFields) {
  try {
    var newDataset = DatasetBuilder.newDataset();
    var dataSource = "/jdbc/TESTE";
    var ic = new javax.naming.InitialContext(); // Instancia da class java
    var ds = ic.lookup(dataSource);
    var myQuery = "SELECT TOP 5 * FROM SB1100 WHERE D_E_L_E_T_ = ''";
    var myExecute = "";
    var created = false;

    if (constraints != null) {
      for (var i = 0; i < constraints.length; i++) {
        if (constraints[i].fieldName == "query" && constraints[i].initialValue != "") {
          myQuery = constraints[i].initialValue;
        } else if (constraints[i].fieldName == "execute" && constraints[i].initialValue != "") {
          myExecute = constraints[i].initialValue;
        }
      }
    }
    if (myQuery == "" && myExecute == "") {
      throw {
        message: "Required fields contraint 'query' or 'execute'",
      };
    }

    log.info("############# Start conection ##################################");

    var conn = ds.getConnection();
    var stmt = conn.createStatement();

    if (myQuery != "") {
      var command = stmt.executeQuery(myQuery);
      var columnCount = command.getMetaData().getColumnCount();

      while (command.next()) {
        if (!created) {
          for (var i = 1; i <= columnCount; i++) {
            newDataset.addColumn(command.getMetaData().getColumnName(i));
          }
          created = true;
        }

        var array = [];

        for (var i = 1; i <= columnCount; i++) {
          var object = command.getObject(command.getMetaData().getColumnName(i));

          if (null != object) {
            array[i - 1] = command.getObject(command.getMetaData().getColumnName(i).toString());
          } else {
            array[i - 1] = "null";
          }
        }

        newDataset.addRow(array);

        log.info("Finish Serialization JDBC");
      }
    } else {
      var command = stmt.executeUpdate(myExecute);
      log.info("########### Return Updated ############");
      newDataset.addColumn("message");
      newDataset.addRow([command.toString()]);
    }
  } catch (e) {
    log.error("=========================ERRO=============================== ");
    log.error("=========================ERRO=============================== ");
    log.error("=========================ERRO=============================== ");
    log.error("--------------------------------------: Dataset Integration" + e.message);
    log.error("=========================ERRO=============================== ");
    log.error("=========================ERRO=============================== ");
    log.error("=========================ERRO=============================== ");

    newDataset.addColumn("message error");
    newDataset.addRow([e.message]);
  } finally {
    if (stmt != null) {
      stmt.close();
    }

    if (conn != null) {
      conn.close();

      log.info("########################### execute dataset finished");

      return newDataset;
    }
  }
}
