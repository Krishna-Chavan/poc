import requests
import base64

def fetch_latest_commit(repository_name, github_token):
    # Set up the request headers
    headers = {
        'Authorization': f'Token {github_token}',
        'Accept': 'application/vnd.github.v3+json'
    }

    # Get the default branch of the repository
    repo_url = f'https://api.github.com/repos/{repository_name}'
    repo_response = requests.get(repo_url, headers=headers)
    repo_data = repo_response.json()
    default_branch = repo_data.get('default_branch', 'master')  # Use 'master' as a fallback default branch

    # Get the latest commit on the default branch
    commits_url = f'{repo_url}/commits?per_page=1&sha={default_branch}'
    commits_response = requests.get(commits_url, headers=headers)
    commits_data = commits_response.json()
    latest_commit_sha = commits_data[0]['sha']

    # Get the latest committed file
    file_url = f'https://api.github.com/repos/{repository_name}/commits/{latest_commit_sha}'
    file_response = requests.get(file_url, headers=headers)
    file_data = file_response.json()
    committed_files = file_data['files']

    for file in committed_files:
        file_path = file['filename']
        file_content_url = file['raw_url']
        file_content_response = requests.get(file_content_url)
        file_content = file_content_response.text

        # Print the latest committed file and its content
        print(f"Latest Committed File: {file_path}")
        print("Content:")
        print(file_content)
        print("----------------------------------------")
        prompt_text = "write functional test cases for the above to open www.mycoud.com url  click on the icon and use krishna@gmai.com as email input and click on signin button using selenium in java by using css selector and also include thread.sleep for 10sec at every step give me code"
        prompt = file_content + " " + prompt_text

        print(prompt)

        # Make a completion request with the prompt
        response = openai.Completion.create(
            engine='text-davinci-003',
            prompt=prompt,
            max_tokens=3000,
            top_p=1,
            frequency_penalty=0.5,
            presence_penalty=0,
            stop=['"""'],
        )

        # Process the response
        if 'choices' in response:
            for choice in response['choices']:
                generated_text = choice['text']
                print("Generated Text:")
                print(generated_text)

                # Specify the new folder path
                new_folder_path = 'genai'

                # Update the file path to include the new folder
                file_path = f'{new_folder_path}/generated_test_cases.spec.ts'

                # Create a new file with the generated code in the new folder
                create_file_url = f'https://api.github.com/repos/{repository_name}/contents/{file_path}'
                create_file_data = {
                    'message': 'Generated test cases',
                    'content': base64.b64encode(generated_text.encode('utf-8')).decode('utf-8'),
                    'branch': default_branch,
                    'sha': latest_commit_sha
                }
                create_file_response = requests.put(create_file_url, headers=headers, json=create_file_data)
                if create_file_response.status_code == 201:
                    print("Generated code written to the repository in the new folder.")
                else:
                    print("Error: Failed to write generated code to the repository.")
        else:
            print("Error: Failed to generate text.")

    return default_branch

# Example usage
repository_name = 'Krishna-Chavan/poc'  # Replace with the repository name
github_token = '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'  # Replace with your GitHub token

committed_branch = fetch_latest_commit(repository_name, github_token)

# Print the committed branch
print(f"Committed Branch: {committed_branch}")
