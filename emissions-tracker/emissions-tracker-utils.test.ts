import { parseTrackerArguments, getDomainFromURL } from './emissions-tracker-utils'

describe('Tracker utils functions', () => {
  it('getDomainFromURL should return the domain', () => {
    let url, domain
    url = 'https://ifieldnotes.org/sustainability?qs=qsvalue'
    domain = getDomainFromURL({url})
    expect(domain).toEqual('ifieldnotes.org')
    url = 'https://smth.uk/'
    domain = getDomainFromURL({url})
    expect(domain).toEqual('smth.uk')
    url = 'bbcorp.fr'
    domain = getDomainFromURL({url})
    expect(domain).toEqual('bbcorp.fr')
    url = 'https://www.understood.org/'
    domain = getDomainFromURL({url})
    expect(domain).toEqual('understood.org')
    url = 'https://www.bbc.co.uk'
    domain = getDomainFromURL({url})
    expect(domain).toEqual('bbc.co.uk')
    url = 'http://localhost'
    domain = getDomainFromURL({url})
    expect(domain).toEqual('localhost')
  })
  
  it('parseTrackerArguments should parse the args array and return valid flags', () => {
    const args = ['-v', '-r', '1,2,3']
    const argOptions = {
        verboseArgs: ['-v', '--verbose']
      , urlArgs: ['-u', '--url']
      , lighthouseArgs: ['-lh', '--lighthouse']
      , ratioArgs: ['-r', '--ratios']
    }
    
    const { verbose, ratios, lighthouse } = parseTrackerArguments({args, argOptions})
    expect(verbose).toBeTruthy()
    expect(ratios).toEqual({
        css: 1
      , js: 2
      , other: 3
    })
    expect(lighthouse).toBeFalsy()
  })
})