describe("Servers Test", function() {
  beforeEach(function () {
    serverNameInput.value = 'Alice';
  });

  it('should add a new server to allServers on submitServerInfo()', function () {
    submitServerInfo();
    let server = serverTbody.querySelector('tr');
    let servers = serverTbody.querySelectorAll('tr');
    let serverInfo = serverTbody.querySelectorAll('td');

    expect(Object.keys(allServers).length).toEqual(1);
    expect(allServers['server' + serverId].serverName).toEqual('Alice');
    expect(serverId).toEqual(1);
    expect(servers.length).toEqual(1);
    expect(serverInfo[0].innerText).toEqual('Alice');
    expect(serverInfo[1].innerText).toEqual('$0.00' || '$1.00');
    expect(server.getAttribute('id')).toEqual('server' + serverId);
  });

  
  afterEach(function() {
    allServers = {};
    serverId = 0;
    serverTbody.innerHTML = '';
  });
  
});
