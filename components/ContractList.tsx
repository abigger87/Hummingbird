import React, { useEffect, useState } from "react";
import useSWR from "swr";
import TextField from "@material-ui/core/TextField";

import { grid, card, searchBar, row, column } from "../styles/components";
import { fetcher } from "../lib";
import { Button, Input } from "@material-ui/core";

const ContractList = () => {
  const [host, setHost] = useState("http://localhost:8545");
  const [filter, setFilter] = useState("");
  const [peerCount, setPeerCount] = useState(0);
  const [blockNumber, setBlockNumber] = useState("0x0");
  const [networkId, setNetworkId] = useState(0);
  const [accounts, setAccounts] = useState([]);
  const [contracts, setContracts] = useState([]); // TODO: HOW!!?!??

  const getPeerCount = async () => {
    let _newPeerCount = await fetcher({ method: "net_peerCount", id: 74 })(
      host
    );
    setPeerCount(_newPeerCount);
  };

  const getBlockNumber = async () => {
    let _newBlockNumber = await fetcher({ method: "eth_blockNumber", id: 83 })(
      host
    );
    setBlockNumber(_newBlockNumber);
  };

  const getNetworkId = async () => {
    let _newNetworkId = await fetcher({ method: "net_version", id: 67 })(host);
    setNetworkId(_newNetworkId);
  };

  const getAccounts = async () => {
    let _newAccounts = await fetcher({ method: "eth_accounts", id: 67 })(host);
    setAccounts(_newAccounts);
  };

  const onInputChange = (e) => {
    console.log("input change...");
    console.log(e);
    let file = e.target.files[0];
    console.log(file);
  };

  useEffect(() => {
    getPeerCount();
    getBlockNumber();
    getNetworkId();
    getAccounts();
  }, []);

  return (
    <div className={grid}>
      <div className={row}>
        <div className={card}>
          <h3>Network {networkId}</h3>
          <span>
            {blockNumber ? (
              <p>
                Peer Count <b>{peerCount}</b>
              </p>
            ) : (
              ""
            )}
          </span>
          <span>
            {blockNumber ? (
              <p>
                Block Number <b>{blockNumber}</b>
              </p>
            ) : (
              ""
            )}
          </span>
        </div>
        <div className={column}>
          <div className={searchBar}>
            <TextField
              id="outlined-search"
              onChange={(input) => setHost(input.target.value)}
              label="Network Url"
              value={host}
              fullWidth
              type="search"
              variant="outlined"
              InputLabelProps={{
                classes: {
                  root: "MuiFormLabel-root",
                  focused: "MuiFormLabel-root",
                },
              }}
              InputProps={{
                classes: {
                  root: "MuiFormLabel-root",
                  focused: "MuiFormLabel-root",
                  notchedOutline: "MuiFormLabel-root",
                },
              }}
            />
          </div>
          <div className={searchBar}>
            <TextField
              id="outlined-search"
              onChange={(input) => setFilter(input.target.value)}
              label="contract 1, contract 2..."
              type="search"
              fullWidth
              variant="outlined"
              InputLabelProps={{
                classes: {
                  root: "MuiFormLabel-root",
                  focused: "MuiFormLabel-root",
                },
              }}
              InputProps={{
                classes: {
                  root: "MuiFormLabel-root",
                  focused: "MuiFormLabel-root",
                  notchedOutline: "MuiFormLabel-root",
                },
              }}
            />
          </div>
        </div>
      </div>
      <div className={card}>
        <h3>Contracts</h3>
        <Input
          id="contained-button-file"
          inputProps={{
            accept: ".js",
          }}
          onChange={onInputChange}
          style={{ display: "none" }}
          type="file"
        />
        <label htmlFor="contained-button-file">
          <Button
            variant="text"
            style={{ color: "currentColor", border: "2px solid" }}
            component="span"
          >
            Upload truffle config
          </Button>
        </label>
        {contracts.length > 0
          ? contracts
              .filter((str) => str.toLowerCase().includes(filter))
              .map((contract) => <p key={contract}>{contract}</p>)
          : ""}
      </div>
      <div className={card}>
        <h3>Accounts</h3>
        {accounts.length > 0 ? (
          accounts
            .filter((str) => str.toLowerCase().includes(filter))
            .map((account) => (
              <p style={{ wordBreak: "break-all" }} key={account}>
                - {account}
              </p>
            ))
        ) : (
          <h3>Loading accounts...</h3>
        )}
      </div>
    </div>
  );
};

export default ContractList;
