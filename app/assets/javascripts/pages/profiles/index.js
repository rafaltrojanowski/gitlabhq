import '~/profile/gl_crop';
import Profile from '~/profile/profile';
import { getPagePath } from '~/lib/utils/common_utils';

document.addEventListener('DOMContentLoaded', () => {
  $(document).on('input.ssh_key', '#key_key', function () { // eslint-disable-line func-names
    const $title = $('#key_title');
    const comment = $(this).val().match(/^\S+ \S+ (.+)\n?$/);

    // Extract the SSH Key title from its comment
    if (comment && comment.length > 1) {
      $title.val(comment[1]).change();
    }
  });

  if (getPagePath() === 'profiles') {
    new Profile(); // eslint-disable-line no-new
  }
});
