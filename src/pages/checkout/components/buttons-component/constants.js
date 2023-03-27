import {CasperClient , CasperServiceByJsonRPC} from 'casper-js-sdk'
export const apiUrl = "https://apiv2.droplinked.com/http-req?method=post&url=http://188.40.47.161";
export const metadata_uref  = "metadatas";//"uref-2cff9bd7ac5b27970f6288c6651721db5b855cca899cc02aa7ac1ea6a086273b-007";
export const request_objects_uref  = "request_objects";//"uref-c4ab070d45a603116974847996a8c89d8dfbe57a8ce2beb0aff2cd3b7650c186-007";
export const producer_requests_uref  = "producer_requests";//"uref-77de1dcdca98f72cff339d845054e94f817040ce9604320af03d8d6c8e4bcb49-007";
export const publisher_requests_uref  = "publiser_requests";//"uref-61671d3c0354cb62c1c7c1b6493ca5a0556d36c3840bb21ac01bd5d7eaebb284-007";
export const holders_uref = "holders";//"uref-91283df25754c88d746a2b735d487b1efe944d9d509dc850cebc4980204ac519-007";
export const owners_dict_uref  = "owners";//"uref-45a3e233eb33b18f6095e7b55ed80bbbd14faad87d8f71896c46e7415edab47e-007";
export const producers_approved_dict_uref  = "producers_approved";//"uref-1c457b9e2f4c03f7db8f612f89399cb6cf3012ed0b14e5e910f6c4885e58edb7-007";
export const publishers_approved_dict_uref  = "publishers_approved";//"uref-a770647b7f054588f5c36d78a53d7fe0eeb7e5603752f36f1b75807304032c3e-007";
export const publishers_rejected_dict_uref  = "publisher_rejects";//"uref-afaf40e70e5055284ccf6bb34ef71ff1a448d64329112f34096a9d3b2ab774b6-007";
export const approved_dict_uref = "approved";//"uref-db339a021027e81aa65425482e233403b6522c5def929f69abf59ff00f50535b-007";
export const token_id_by_metadata_hash = "token_id_by_hash";//"uref-cbf612eb59083565cb6a666a86a1f0cd4c33b5b378c48f845f81a57ecfbfcb43-007";
export const contract_hash = "7e818936550e216dd01e83fba521c726a573336afd9953148b97aec01e8c3d68";
export const network = "casper-test";
export const casperService = new CasperServiceByJsonRPC(apiUrl+":7777/rpc");
export const casperClient = new CasperClient(apiUrl+":7777/rpc");
