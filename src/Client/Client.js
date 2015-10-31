"use strict";

var InternalClient = require("./InternalClient.js");
var EventEmitter = require("events");

class Client extends EventEmitter{
	/*
		this class is an interface for the internal
		client.
	*/
	constructor(options){
		super(options);
		this.internal = new InternalClient(this);
	}
	
	login(email, password, cb=function(err, token){}){
		var self = this;
		return new Promise(function(resolve, reject){
			
			self.internal.login(email, password)
				.then((token)=>{
					
				})
				.catch((e)=>{
					cb(e);
					reject(e);
				});
			
		});
	}
	
}

module.exports = Client;