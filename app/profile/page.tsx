import ChangePasswordForm from "@/components/forms/ChangePasswordForm";
import EditProfileForm from "@/components/forms/EditProfileForm";
import Wrapper from "@/components/layout/Wrapper";

export default function Profile() {
  return (
    <Wrapper>
      <main className="flex flex-wrap">
        <div className="grow border-r border-r-white">
          <ul>
            <li>Profile</li>
            <li>Change Password</li>
          </ul>
        </div>
        <div className="basis-0 grow-[999] min-w-[65%]">
          <EditProfileForm></EditProfileForm>
          <ChangePasswordForm></ChangePasswordForm>
        </div>
      </main>
    </Wrapper>
  );
}
