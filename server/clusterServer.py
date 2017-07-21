import json
import io
import cherrypy
from collections import OrderedDict

# opens a json file containing the menu items
class MenuItems(object):
	exposed = True
	
	@cherrypy.tools.accept(media='text/plain')
	@cherrypy.tools.json_in()
	@cherrypy.tools.json_out()
	def GET(self):
		# get json data from file   
		return json.load(open("../json/menu_items.json"),object_pairs_hook=OrderedDict) 

# opens a json file containing the current status
class CurrentStatus(object):
	exposed = True
	
	@cherrypy.tools.accept(media='text/plain')
	@cherrypy.tools.json_in()
	@cherrypy.tools.json_out()
	def GET(self):       
		# get json data from file   
		return json.load(open("../json/current_status.json"),object_pairs_hook=OrderedDict) 

# opens a json file containing the architecture	info	
class Architecture(object):
	exposed = True
	
	@cherrypy.tools.accept(media='text/plain')
	@cherrypy.tools.json_in()
	@cherrypy.tools.json_out()
	def GET(self):
		# get json data from file   
		return json.load(open("../json/architecture.json"),object_pairs_hook=OrderedDict)

# opens a json file containing info about how to getting an account
class AccountInfo(object):
	exposed = True
	
	@cherrypy.tools.accept(media='text/plain')
	@cherrypy.tools.json_in()
	@cherrypy.tools.json_out()
	def GET(self):
		# get json data from file   
		return json.load(open("../json/account_info.json"),object_pairs_hook=OrderedDict)

# opens a json file containing info on how to run a job
class RunJob(object):
	exposed = True
	
	@cherrypy.tools.accept(media='text/plain')
	@cherrypy.tools.json_in()
	@cherrypy.tools.json_out()
	def GET(self):
		# get json data from file   
		return json.load(open("../json/run_job.json"),object_pairs_hook=OrderedDict) 

# opens a json file containing available software
class Software(object):
	exposed = True
	
	@cherrypy.tools.accept(media='text/plain')
	@cherrypy.tools.json_in()
	@cherrypy.tools.json_out()
	def GET(self):
		# get json data from file   
		return json.load(open("../json/software.json"),object_pairs_hook=OrderedDict) 

# opens a json file containing links to other resources
class Resources(object):
	exposed = True
	
	@cherrypy.tools.accept(media='text/plain')
	@cherrypy.tools.json_in()
	@cherrypy.tools.json_out()
	def GET(self):
		# get json data from file   
		return json.load(open("../json/resources.json"),object_pairs_hook=OrderedDict)          

# opens a json file containing items that make up the footer
class Footer(object):
	exposed = True
	
	@cherrypy.tools.accept(media='text/plain')
	@cherrypy.tools.json_in()
	@cherrypy.tools.json_out()
	def GET(self):
		# get json data from file   
		return json.load(open("../json/footer.json"),object_pairs_hook=OrderedDict)  		

# setting headers		
def secureheaders():
    headers = cherrypy.response.headers
    headers['X-Frame-Options'] = 'DENY'
    headers['X-XSS-Protection'] = '1; mode=block'
    headers['Content-Security-Policy'] = "default-src='self'"
    if (cherrypy.server.ssl_certificate != None and cherrypy.server.ssl_private_key != None):
    	headers['Strict-Transport-Security'] = 'max-age=31536000'

# wrapping the application with the headers while setting priority
cherrypy.tools.secureheaders = \
    cherrypy.Tool('before_finalize', secureheaders, priority=60)
 
# changing port and host
cherrypy.config.update({			
                        'server.socket_port': 8080,
                       })

#configurations
if __name__ == '__main__':
    conf = {
		'/': {
			'request.dispatch': cherrypy.dispatch.MethodDispatcher(),
			'tools.sessions.on': True,
			'tools.sessions.secure' : True,
			'tools.sessions.httponly' : True,
            'tools.response_headers.on': True,
            'tools.response_headers.headers': [('Content-Type', 'text/plain')],
            'tools.secureheaders.on' : True,
			}
        }
    
    # mounting all json files    
    cherrypy.tree.mount(MenuItems(), '/menuItems.json', config = conf)
    cherrypy.tree.mount(CurrentStatus(), '/currentStatus.json', config = conf)
    cherrypy.tree.mount(Architecture(), '/architecture.json', config = conf)
    cherrypy.tree.mount(AccountInfo(), '/accountInfo.json', config = conf)
    cherrypy.tree.mount(RunJob(), '/runJob.json', config = conf)
    cherrypy.tree.mount(Software(), '/software.json', config = conf)
    cherrypy.tree.mount(Resources(), '/resources.json', config = conf)
    cherrypy.tree.mount(Footer(), '/footer.json', config = conf)
    cherrypy.engine.start()
    cherrypy.engine.block()	
